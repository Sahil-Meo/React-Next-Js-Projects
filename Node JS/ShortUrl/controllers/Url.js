
const URL = require("../config/db")
const nanoid = require("nanoid")

async function getGenratedShortUrl(req, res) {
     const { url } = req.body;
     try {
          if (!url) return res.status(401).json({ success: false, message: "url string is required" });
          const genId = nanoid(8)
          const createdUrl = await URL.create({
               shortId: genId,
               redirectURL: url,
               visitHistory: Date.now()
          })

          res.status(200).json({ id: genId, success: true, message: "url genrated successfully" })
     } catch (error) {
          return res.status(500).json({ success: false, message: error.message });
     }
} 

module.exports = {
     getGenratedShortUrl
};