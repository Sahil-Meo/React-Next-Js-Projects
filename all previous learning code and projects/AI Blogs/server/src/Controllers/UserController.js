import Users from "../Models/UsersModel.js";
import { uploadOnCloudinary } from "../Utils/Cloudinary.js";
import { generateAccessToken } from "../Utils/jwt.js";
import { ApiError } from '../Utils/ApiError.js';
import { ApiResponse } from '../Utils/ApiResponse.js';

const emailValidator = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const registerUser = async (req, res) => {
  try {
    console.log("User registration data:", req.body);
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      throw new ApiError(400, "Fullname, email and password are required");
    }

    if (!emailValidator(email)) {
      throw new ApiError(400, "Please enter a valid email");
    }

    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      throw new ApiError(409, "User already exists with this email");
    }
    const newUser = await Users.create({
      fullname,
      email,
      password,
    });

    const createdUser = await Users.findById(newUser._id).select("-password");
    const token = await generateAccessToken(createdUser._id);

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    }

    res.status(201)
      .cookie("accessToken", token, options)
      .json(new ApiResponse(201, { user: { createdUser, token } }, "User registered successfully"))
  } catch (error) {
    console.error("Error registering user:", error);
    throw new ApiError(500, "Some error occured while registering the user", error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new ApiError(400, "Email and password are required");
    }

    if (!emailValidator(email)) {
      throw new ApiError(400, "Please enter a valid email")
    }

    const user = await Users.findOne({ email }).select(" +password");
    if (!user) {
      throw new ApiError(404, "User doesn't exist with this email");
    }

    const isMatch = await user.isPasswordCorrect(password);
    if (!isMatch) {
      throw new ApiError(401, "Please try again with correct password")
    }

    const userData = await Users.findById(user._id).select("-password");

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000
    }

    const token = await generateAccessToken(user._id);

    res.status(200)
      .cookie("accessToken", token, options)
      .json(new ApiResponse(200, { user: { userData, token } }, "User logged in successfully"));
  } catch (error) {
    console.error("Error logging in user:", error.message);
    throw new ApiError(500, error.message);
  }
};

const logoutUser = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      throw new ApiError(400, "User ID is required to logout");
    }

    await Users.findByIdAndUpdate(userId, { $set: { token: null } });

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      expires: new Date(0) // Set cookie expiration to a past date
    };

    res.clearCookie("accessToken", options);
    res
      .status(200)
      .json(new ApiResponse(200, null, "User logged out successfully"));
  } catch (error) {
    console.error("Error logging out user:", error);
    throw new ApiError(500, error.message)
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await Users.findById(userId).select("-password");
    if (!user) {
      throw new ApiError(404, "User not found");
    }
    res.status(200).json(new ApiResponse(200, { user }, "User profile fetched successfully"));
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw new ApiError(500, error.message);
  }
};

const updateUserDetail = async (req, res) => {
  try {
    const userId = req.user._id;
    const { fullname, email } = req.body;

    const user = await Users.findById(userId);
    if (!user) {
      throw new ApiError(404, "User not found with this id");
    }

    user.fullname = fullname;
    user.email = email;

    await user.save();

    res.status(200).json(new ApiResponse(200, { user }, "User profile updated successfully"));
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw new ApiError(500, "Some error occured while updating user profile", error.message);
  }
};

const updateAvatar = async (req, res) => { 
  try {
    const userId = req.user._id;
    const avatarLocalPath = req.file?.path;

    if (!avatarLocalPath) {
      throw new ApiError(400, "Avatar image is required");
    }

    const avatarResponse = await uploadOnCloudinary(avatarLocalPath);

    const user = await Users.findByIdAndUpdate(userId, { avatar: avatarResponse.secure_url });

    res.status(200).json(new ApiResponse(200,  user , "User avatar updated successfully"));
  } catch (error) {
    console.error("Error updating user avatar:", error);
    throw new ApiError(500, "Some error occured while updating user avatar", error.message);
  }
};

export { registerUser, loginUser, logoutUser, getProfile, updateUserDetail, updateAvatar };
