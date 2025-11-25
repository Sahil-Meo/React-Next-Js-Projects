const express = require("express")
const { getGenratedShortUrl, getURL,getAnalyticsOfUrl } = require("../controllers/url")

const router = express.Router()

router.route('/').post(getGenratedShortUrl)
router.route('/:id').get(getURL) 

module.exports =router