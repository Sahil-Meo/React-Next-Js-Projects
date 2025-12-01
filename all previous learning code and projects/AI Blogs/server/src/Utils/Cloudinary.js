import { v2 as Cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv'
dotenv.config();

Cloudinary.config({
     cloud_name: "dyr8pvtyq",
     api_key: "268754762784447",
     api_secret: "n7fY6iWevoAMnfdbk71c7zIUu58"

});

const uploadOnCloudinary = async (filePath) => {
     try {
          // console.log("file path of local file clodinary", filePath);
          if (!filePath) return null;
          const response = await Cloudinary.uploader.upload(filePath, { resource_type: 'auto' });
          return response;
     } catch (error) {
          console.log("Some error occured while uploading file on cloudinary", error.message);
          if (fs.existsSync(filePath)) {
               fs.unlinkSync(filePath);
          }
          return null;
     }
}

export { uploadOnCloudinary }