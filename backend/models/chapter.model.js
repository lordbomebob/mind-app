const mongoose = require('mongoose')
const Schema= mongoose.Schema

chapterSchema = new Schema({
    storyTitle:{
        type: String,
        required: true,
        trim:true
    },
    chaterNum:{
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