const path = require("path")
const morgan = require("morgan")
const logger = require("./middleware/logger")
const express = require('express')
const { engine } = require("express-handlebars")
const sequelize = require("./database")
const router = require("./routes/index")

const app = express()
const port = 3000

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", path.join(__dirname, "views"))

app.use(morgan('dev'))
app.use(logger)

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", router)

app.use((req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1><a href='/'>Go home</a>")
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("<h1>500 - Internal Server Error</h1><a href='/'>Go home</a>")
})

const startServer = async () => {
    try {
        await sequelize.authenticate()
        console.log("Database connected successfully.")

        await sequelize.sync()
        console.log("Database synchronised.")

        app.listen(port, () => {
            console.log(`Express app listening at http://localhost:${port}`)
        })
    } catch (err) {
        console.error("Starup error:", err)
        process.exit(1)
   }
}

startServer()