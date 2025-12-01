import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [3, "Full name must be at least 3 characters long"],
      maxlength: [50, "Full name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
      select: false, // prevents sending hashed password in queries by default
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 5);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  console.log("Comparing passwords:", password, this.password);

  return await bcrypt.compare(password, this.password);
}

// // Optional: virtuals for derived values
// userSchema.virtual("isAdmin").get(function () {
//   return this.role === "admin";
// });

// // Optional: methods for instance-level functionality
// userSchema.methods.toJSON = function () {
//   const obj = this.toObject();
//   delete obj.password; // ensure password is never exposed
//   return obj;
// };

const Users = model("Users", userSchema);

export default Users;
