import multer from "multer";

const storage = multer.diskStorage({
     destination: function (req, file, cb) {
          cb(null, "./public/temp");
     },
     filename: function (res, file, cb) {
          const uniqueSuffix = Date.now() + "-" + file.originalname;
          cb(null, uniqueSuffix);
     }
})

export const upload = multer({ storage: storage });