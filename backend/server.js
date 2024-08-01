const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.port || 5000
const path=require(`path`)
app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri)
const connection= mongoose.connection
connection.once(`open`, ()=>{
    console.log(`mongodb database connection established successfully`)
})

const userRouter= require(`./routes/user.route`)
const storyRouter= require(`./routes/story`)
app.use(express.static(path.join(__dirname,`frontend`)))
app.use(`/user`, userRouter)
app.use(`/story`, storyRouter)

app.listen(port,()=>{
    console.log(`server is running on prot: ${port}`)
})