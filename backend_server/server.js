const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
require('dotenv').config()

const port = process.env.PORT
app.listen(port, () => console.log(`Server listening on port ${port}`))

app.get('/api', (req, res) => {
    res.send("Seedlings by Mwalim server's home page")
})

const TokenRoute = require('./routes/token')
app.use('/api/token', TokenRoute)


