import { Router } from "express";
import verifyToken from "../Middlewares/AuthMiddleware.js"
import { upload } from "../Middlewares/MulterMiddleware.js"
import {
     uploadBlog,
     updateBlog,
     getAllBlogs,
     getSingleBlog,
     deleteBlog,
} from '../Controllers/BlogController.js'

const router = Router();

router.route('/blogs').get(getAllBlogs)
router.route('/blog').get(getSingleBlog)

router.use(verifyToken);
router.route('/upload-blog').post(upload.fields([
     { name: "coverImage", maxCount: 1 },
     { name: "blockImage", maxCount: 10 }
]), uploadBlog);
router.route('/update-blog').post(updateBlog);
router.route('/delete-blog').post(deleteBlog);


export default router;