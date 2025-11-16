const express = require("express")
const { getGenratedShortUrl } = require("../controllers/url")

const router = express.Router()

router.route('/').post(getGenratedShortUrl)

module.exports = {
     router
};