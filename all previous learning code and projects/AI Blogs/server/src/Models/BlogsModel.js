import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Schema for content blocks
const BlockSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["heading", "paragraph", "image"],
      required: true,
    },
    level: {
      type: Number, // only used for headings (h1, h2, h3, etc.)
    },
    text: {
      type: String, // used for heading + paragraph
      trim: true,
    },
    url: {
      type: String, // for image block
    },
    alt: {
      type: String,
      trim: true,
    },
    caption: {
      type: String,
      trim: true,
    },
  },
  { _id: false } // no separate _id for each block
);

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
      minlength: 5,
      maxlength: 150,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    excerpt: {
      type: String,
      maxlength: 300,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    categories: {
      type: [String],
      index: true,
    },
    tags: {
      type: [String],
      index: true,
      validate: {
        validator: (arr) => arr.length <= 10,
        message: "You can add up to 10 tags only",
      },
    },
    cover: {
      type: String, // Cloudinary / CDN URL
    },
    blocks: {
      type: [BlockSchema],
      validate: {
        validator: (arr) => arr.length > 0,
        message: "Blog content cannot be empty",
      },
    },
    publishedAt: {
      type: Date,
      default: null,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

// Indexes
BlogSchema.index({ title: "text", excerpt: "text", tags: 1, categories: 1 });

const Blog = model("Blog", BlogSchema);

export default Blog;
