const Property = require("../models/property.js")

async function listProperties(req, res) {
    try {
        const { type } = req.query
        const where = type ? { type } : {}

        const properties = await Property.findAll({ where, limit: 21, raw: true})

        res.render("home", { properties })
    } catch (error) {
        console.error("Error loading properties:", error.message)
    }
}

module.exports = { listProperties }