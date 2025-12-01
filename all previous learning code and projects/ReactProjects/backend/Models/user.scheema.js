import mongoose from "mongoose";


const UserScheema = new mongoose.Schema({
    email: {
        type:String,
        required: true,
        unique: true,
    },
    password: String,
}, {timestamps: true})


export const  User = mongoose.model("User",UserScheema)