const mongoose = require("mongoose")

async function connectDB() {
     try {
          const dbConnnect = await mongoose.connect(`${process.env.MONGO_URI}/short-url`);
          if (dbConnnect) {
               console.log(`MongoDB Connected Successfully!`);
          }
     } catch (error) {
          console.log("MongoDB Connection error :", error);
          return error;
     }
}


module.exports = {
     connectDB
};