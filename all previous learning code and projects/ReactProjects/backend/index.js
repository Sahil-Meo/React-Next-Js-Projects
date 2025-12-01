import cors from 'cors'
import mongoose from "mongoose";
import router from "./Routes/Routes.js";
import express from 'express'


const app = express();
// const mongoURI = "mongodb://localhost:27017/"
const mongoURI = "mongodb://127.0.0.1:27017/login";


const port = 4000

mongoose.connect(mongoURI).then(()=> console.log("Database connected successfuly")).catch((error)=> console.log(error) )

app.use(cors({
    origin: true,

}))


app.use(express.json())
app.use("/api",router)


app.listen(port, ()=> {
    console.log('Server is running at port ', port)
})

