const Property = require("../models/property.js")

async function listProperties(req, res) {
    try {
        const { suburb } = req.query
        const where = suburb ? { suburb } : {}

        const properties = await Property.findAll({ where, limit: 21, raw: true})

        res.render("home", { properties })
    } catch (error) {
        console.error("Error loading properties:", error.message)
    }
}

module.exports = { listProperties }