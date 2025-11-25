

const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function getGenratedShortUrl(req, res) {
     const { url } = req.body;
     try {
          console.log(req.body)
          if (!url) return res.status(400).json({ success: false, message: "url string is required" });
          const genId = nanoid(8)
          console.log("You are there")
          const createdUrl = await URL.create({
               shortId: genId,
               redirectUrl: url
          })
          res.render('home', {url:createdUrl})
     } catch (error) {
          return res.status(500).json({ success: false, message: error.message });
     }
}

const getURL = async (req, res) => {
     const shortId = req.params.id
     try {
          if (!shortId) return res.status(400).json({ success: false, message: "url id required" })
          const entry = await URL.findOneAndUpdate({ shortId }, {
               $push: {
                    visitHistory: {
                         timestamps: Date.now()
                    }
               }
          }, { new: true })
          console.log(entry)
          if (!entry) return res.status(404).json({ success: false, message: "Incorrect credentials try again" });
          res.status(200).redirect(entry.redirectUrl)
     } catch (error) {
          return res.status(500).json({ success: false, message: error.message })
     }
}

async function getAnalyticsOfUrl(req, res) {
     try {
          const shortId = req.params.id
          if (!shortId) return res.status(400).json({ success: false, message: "url id required" })
          const results = await URL.findOne({ shortId })
          if (!results) return res.status(404).json({ success: false, message: "Incorrect credentials try again" });
          res.status(200).json({success:true, message:"analytics fetch successfully", totalClicks:results.visitHistory.length, analytics:results.visitHistory });

     } catch (error) {
          return res.status(500).json({ success: false, message: error.message })
     }
}

module.exports = {
     getGenratedShortUrl,
     getURL,
     getAnalyticsOfUrl
};