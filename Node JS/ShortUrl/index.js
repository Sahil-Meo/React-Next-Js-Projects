const express = require("express")
const dotenv = require("dotenv");
const {connectDB} = require("./config/db");
const urlRouter = require("./routes/url");


const app = express();
dotenv.config()

connectDB()

app.use('/short-url', urlRouter);

const PORT = process.env.PORT || 8002;

app.listen(PORT, (() => {
     console.log(`Server is running http://localhost:${PORT}`);
}))
