import express from 'express'
import { getProfile, loginUser, logoutUser, registerUser, updateAvatar, updateUserDetail } from '../Controllers/UserController.js';
import { upload } from '../Middlewares/MulterMiddleware.js';
import verifyToken from '../Middlewares/AuthMiddleware.js';

const router = express.Router()


router.route('/register').post(registerUser);
router.route("/login").post(loginUser);

router.use(verifyToken);
router.route("/logout").post(logoutUser);
router.route("/user-profile").get(getProfile);
router.route("/update-details").put(updateUserDetail);
router.route("/update-avatar").put(upload.single('avatar'), updateAvatar);

export default router;