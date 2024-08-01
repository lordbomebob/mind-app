const mongoose = require('mongoose')
const Schema= mongoose.Schema

const storySchema= new Schema({
    storyTitle:{
        type: String,
        required: true,
        trim:true
    },
    description:{
        type: String,
    },
    status:{
        type: String,
        trim:true
    }
},{
    timestamps:true
})
const story= mongoose.model(`story`, storySchema)

module.exports= story