import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commentSchema = new Schema({
     postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
     content: { type: String, required: true },
}, { timestamps: true });

const Comments = model("Comments", commentSchema);
export default Comments;
