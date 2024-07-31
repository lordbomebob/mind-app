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
},{
    timestamps:true
})