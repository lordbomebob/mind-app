const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.port || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri)
const connection= mongoose.connection
connection.once(`open`, ()=>{
    console.log(`mongodb database connection established successfully`)
})

app.listen(port,()=>{
    console.log(`server is running on prot: ${port}`)
})