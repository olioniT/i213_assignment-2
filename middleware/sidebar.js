const Properties = require("../models/property.js")

let ALL_SUBURBS = []

async function getSuburbs() {
    try {
        let results = await Properties.aggregate("suburb", "DISTINCT", { plain: false })
        let suburbs = results.map(r => (r["DISTINCT"]))

        ALL_SUBURBS = suburbs
    } catch (err) {
        console.error(err)
    }
}

getSuburbs()

async function sidebarData(req, res, next) {
    const activeSuburb = req.query.suburb

    res.locals.suburbs = ALL_SUBURBS.map(s => ({ name: s, active: s === activeSuburb }))
    res.locals.showAll = !activeSuburb
    
    next()
}

module.exports = sidebarData