const express = require("express")
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const urlRouter = require("./routes/url");
const path = require('path');
const URL = require("./models/url");


const app = express();
dotenv.config()

connectDB()
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use('/url', urlRouter);
app.get('/', async (req, res) => {
     const allUrls = await URL.find()
     return res.render('home', { urls: allUrls })
})
app.get('/renderTest/about', async (req, res) => {
     const allUrls = await URL.find()
     return res.render('about', { urls: allUrls, user: "Sahil Meo" })
})
app.get('/web-page', async (req, res) => {
     const allUrls = await URL.find()
     return res.render('page')
})

const PORT = process.env.PORT || 8002;

app.listen(PORT, (() => {
     console.log(`Server is running http://localhost:${PORT}`);
}))


// this backend just store clicks yet but in future we add whos click and from where click, date and time when he click , ip address too