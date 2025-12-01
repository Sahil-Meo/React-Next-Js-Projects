import jwt from 'jsonwebtoken'
import { ApiError } from '../Utils/ApiError.js'
import Users from '../Models/UsersModel.js'

const verifyToken = async (req, res, next) => {
     const token = req.cookies?.accessToken || req.header.accessToken;
     // console.log("Verifying token:", token);

     if (!token) {
          return next(new ApiError(401, "Token not provided"));
     }

     try {
          // console.log("secret:", process.env.JWT_SECRET_KEY);

          const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
          // console.log("Decoded token:", decoded);
          req.user = await Users.findById(decoded.id);
          next();
     } catch (error) {
          return next(new ApiError(401, error.message || "Invalid token"));
     }
};

export default verifyToken;
