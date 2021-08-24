const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = requie('dotenv')

dotenv.config()

mongoose.connect()

app.listen(4000, () => console.log("Server is up and running"))