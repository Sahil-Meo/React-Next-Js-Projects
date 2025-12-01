import Blogs from "../Models/BlogsModel.js";
import { ApiError } from "../Utils/ApiError.js";
import { ApiResponse } from "../Utils/ApiResponse.js";
import { uploadOnCloudinary } from "../Utils/Cloudinary.js";

const getAllBlogs = async (req, res) => {
     try {
          let id = req.use?._id;
          const blogs = await Blogs.find(id)
          if (!blogs) {
               throw new ApiError(500, "Internal server error blogs getting failed")
          };

          res.status(200).json(new ApiResponse(200, blogs, "Blogs fetched successfully"))
     } catch (error) {
          console.error("Some error occured while uploading blog: ", error.message);
          throw new ApiError(500, "Some error occured while uploading blog ", error.message);
     }
}

const getSingleBlog = async (req, res) => {
     try {
          const id = req.param.id
          const blog = await Blogs.findById(id)
          if (!blog) {
               throw new ApiError(500, "Internal server error blog getting failed")
          };

          res.status(200).json(new ApiResponse(200, blog, "Blog fetch successfully"))
     } catch (error) {
          console.error("Some error occured while geting single blog: ", error.message);
          throw new ApiError(500, "Some error occured while getting single blog ", error.message);
     }
}

const uploadBlog = async (req, res) => {
     try {
          const {
               title,
               slug,
               excerpt,
               status,
               categories,
               tags,
               blocks
          } = req.body;

          if (!title) {
               throw new ApiError(401, "Title is required");
          }
          if (!slug) {
               throw new ApiError(401, "Slug is required");
          }
          if (!excerpt) {
               throw new ApiError(401, "Excerpt is required");
          }
          if (!status) {
               throw new ApiError(401, "Status is required");
          }
          if (!categories) {
               throw new ApiError(401, "Categories is required");
          }
          if (!tags) {
               throw new ApiError(401, "Tags is required");
          }
          if (!blocks) {
               throw new ApiError(401, "Blocks is required");
          }

          const filePath = req.files?.coverImage?.[0]?.path;
          if (!filePath) {
               throw new ApiError(401, "Blog Featured image required");
          }
          const featuredImage = await uploadOnCloudinary(filePath)
          if (!featuredImage) {
               throw new ApiError(401, "Featured image  required")
          }

          const blockImages = [];
          if (req.files?.blockImage) {
               for (let i = 0; i < req.files.blockImage.length; i++) {
                    const filePath = req.files.blockImage[i].path;
                    const uploadedImage = await uploadOnCloudinary(filePath);
                    if (!uploadedImage) {
                         throw new ApiError(401, "Block image upload failed");
                    }
                    console.log(uploadedImage);
                    blockImages.push(uploadedImage);
               }
          }

          let blockIndex = 0;
          const updatedBlocks = blocks.map((block) => {
               if (block.type === "image" && blockIndex < blockImages.length) {
                    block.image = blockImages[blockIndex];
                    blockIndex++;
               }
               return block;
          });

          const newBlog = await new Blogs.create({
               title,
               slug,
               excerpt,
               status,
               categories,
               tags,
               cover: featuredImage,
               blocks: updatedBlocks
          });
          if (!newBlog) {
               throw new ApiError(500, "Internal server error blog uploading failed")
          };

          res.status(201).json(new ApiResponse(201, newBlog, "Blog uploaded successfully"));
     } catch (error) {
          console.error("Some error occured while uploading blog:", error.message);
          throw new ApiError(500, error.message);
     }
}

const updateBlog = async (req, res) => {
     try {
          const { title, content } = req.body;
          if (!title || !content) {
               throw new ApiError(401, "title and content required");
          }
          // this point need to verify how id take from params 
          const blog = await Blogs.findByIdAndUpdate(req.param.id, {
               $set: {
                    title, content
               }
          }, { new: true })

          if (!blog) {
               throw new ApiError(401, "Blog not found with this id")
          }

          res.status(201).json(new ApiResponse(201, blog, "Blog updated successfully"));
     } catch (error) {
          console.log("Some thing went wrong while update blog: ", error.message);
          throw new ApiError(500, "Some error occured while update blog", error.message);
     }
}

const deleteBlog = async (req, res) => {
     try {
          const blog = await Blogs.findByIdAndDelete(req.param.id);
          if (!blog) {
               throw new ApiError(404, "Blog not found with this id")
          }

          res.status(200).json(new ApiResponse(200, "Blog delete successfully"))
     } catch (error) {
          console.log("Some error occured while delete blog", error.message);
          throw new ApiError(500, "Some error occured while delete blog", error.message);
     }
}

const publishBlog = async (req, res) => {
     try {
          const blog = await Blogs.findByIdAndUpdate(req.param.id, {
               $set: {
                    status: "published"
               }
          }, { new: true });
          if (!blog) {
               throw new ApiError(500, "Blog not found with this id")
          }

          res.status(201).json(new ApiResponse(201, "Blog published successfully"))
     } catch (error) {
          console.log("Some error occured while publish blog", error.message);
          throw new ApiError(500, "Some error occured while publish blog", error.message);
     }
}


export {
     uploadBlog,
     updateBlog,
     getAllBlogs,
     getSingleBlog,
     deleteBlog,
     publishBlog
}
