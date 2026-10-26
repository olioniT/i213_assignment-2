const express = require("express")
const router = express.Router()
const propertysController = require("../controllers/propertysController")

router.get("/", propertysController.listProperties)
router.get("/properties/", propertysController.listProperties)

module.exports = router