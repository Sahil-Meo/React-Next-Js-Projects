import mongoose from "mongoose";

const connectDB = async () => {
     try {
          const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
          console.log(`MongoDB connected successfully! Database Name: ${connectionInstance.connection.name}`);
     } catch (error) {
          console.log("MongoDB connection failed!", error);
     }
}

export default connectDB;