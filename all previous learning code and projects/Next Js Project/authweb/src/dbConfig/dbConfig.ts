import { error } from "console";
import mongoose from "mongoose";

export async function Connect() {
    try {

        mongoose.connect(process.env.MONGO_URL!)

        const connection = mongoose.connection

        connection.on('Connected', () => {
            console.log("MogoDB Connected.");

        })

        connection.on("error", (err) => {
            console.log("MonogDB connection error, please make sure mongoDB up and running" + err);
            process.exit
        })

    } catch (error) {
        console.log("Something went wrong in DB.")
        console.log(error)
    }
}