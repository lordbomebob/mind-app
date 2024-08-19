const mongoose = require('mongoose')
const Schema= mongoose.Schema

const chapterSchema = new Schema({
    storyTitle:{
        type: String,
        required: true,
        trim:true
    },
    chapterNum:{
        type: Number,
        require: true
    },
    chapterTitle:{
        type: String,
    },
    chapterContent:{
        type: String
    }
},{
    timestamps:true
})

const chapter= mongoose.model(`chapter`, chapterSchema)

module.exports= chapter