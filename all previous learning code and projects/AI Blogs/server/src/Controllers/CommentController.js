import Comments from "../Models/CommentsModel.js";
import { ApiError } from "../Utils/ApiError.js";


const addComment = async (req, res) => {
     try {
          const { postId, userId, content } = req.body;
          if (!postId || !userId || !content) {
               return res.status(400).json({ success: false, message: "All fields are required" });
          }

          const newComment = new Comments({ postId, userId, content });
          await newComment.save();

          res.status(201).json({ success: true, data: newComment });
     } catch (error) {
          console.log("Some error occured while delete comment", error.message);
          throw new ApiError(500, "Some error occured while delete comment", error.message);
     }
}

const getCommentsByPostId = async (req, res) => {
     try {
          const { postId } = req.params;
          const comments = await Comments.find({ postId }).populate("userId", "fullname email");
          res.status(200).json({ success: true, data: comments });
     } catch (error) {
          console.log("Some error occured while delete comment", error.message);
          throw new ApiError(500, "Some error occured while delete comment", error.message);
     }
}

const deleteComment = async(req, res) => {
     try {
          
     } catch (error) {
          console.log("Some error occured while delete comment", error.message);
          throw new ApiError(500, "Some error occured while delete comment", error.message);
     }
}

export default {
     addComment,
     getCommentsByPostId,
     deleteComment
}
