import { User } from "../Models/user.scheema.js";


export const createUser = async (req, res) => {
    try {
        console.log( "here is the request ",req.body)
        const { email, password } = req.body;
        // console.log("here is email", email, password)
        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).send("Please enter email and password");
        }

        // Create a new user
        const user = await User.create({ email: email, password: password });

        // If user is created successfully, send a response
        if (user) {
            return res.status(201).send("User created successfully");
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).send("Internal Server Error");
    }
};

export const getUser = async (req, res) => {
    // console.log(req)
    const { email, password } = req.body;
    // console.log(email)
    
    try {
        // Find the user by email
        const user = await User.findOne({ email: email });

        // If user is not found
        if (!user) {
            return res.status(404).send("User not found");
        }

        // Compare the provided password with the stored password
        if (password !== user.password) {
            return res.status(400).send("Password does not match");
        }

        // If the password matches, return success
        return res.status(200).send("User authenticated");

    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).send("Internal Server Error");
    }
};
