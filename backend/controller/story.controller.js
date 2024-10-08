const chapterModel = require("../models/chapter.model")
const storyModel=require(`../models/story.model`)

const getStory= async (req,res)=>{
    try{
        const story = await storyModel.find()
        return res.status(200).json({
            message:`found the story`,
            data:story
            
        })
    }catch(error){
        return res.status(500).json({
            message:`failed finding story`,
            error
        })
    }
}

const storyBeginning= async (req,res)=>{
    const storyBody=req.body
    if(!storyBody.storyTitle){
        return res.status(400).json({
            message:`title missing`
        })
    }

    const storyExist = await storyModel.findOne({storyTitle:storyBody.storyTitle})

    if (storyExist){
        return res.status(403).json({
            message: `story already exists, use another title`
        })
    }

    const newStory= new storyModel({
        storyTitle:storyBody.storyTitle,
        description:storyBody.description,
        status:"Ongoing"
    })

    try{
        const savedStory = await newStory.save()
        return res.status(201).json({
            message: `story registerd succesfully`,
            data: savedStory
        })
    }catch(error){
        return res.status(500).json({
            message: `there was a error`,
            error
        })
    }
}

const addChapter= async (req,res)=>{
    const chapterBody= req.body
    if(!chapterBody.storyTitle){
        return res.status(400).json({
            message:`story title missing`
        })
    }
    if(!chapterBody.chapterNum){
        return res.status(400).json({
            message:`chapter number missing`
        })
    }

    const storyExist = await storyModel.findOne({storyTitle:chapterBody.storyTitle})
    if (!storyExist){
        return res.status(403).json({
            message: `story does not exist`
        })
    }


    const newChapter= new chapterModel({
        storyTitle:chapterBody.storyTitle,
        chapterNum:chapterBody.chapterNum,
        chapterTitle:chapterBody.chapterTitle,
        chapterContent:chapterBody.chapterContent
    })
    try{
        const savedChapter = await newChapter.save()
        return res.status(201).json({
            message: `saved chapter succesfully`,
            data: savedChapter
        })
    }catch(error){
        return res.status(500).json({
            message: `there was a error`,
            error
        })
    }
}

const getChapters= async (req,res) => {
    const searchReqBody= req.body
    if(!searchReqBody.storyTitle){
        return res.status(400).json({
            message:`story title missing for search`
        })
    }

    try{
        const chapter = await chapterModel.find({storyTitle:searchReqBody.storyTitle}).sort({chapterNum:1})
        return res.status(200).json({
            message:`found the story chapters`,
            data:chapter
            
        })
    }catch(error){
        return res.status(500).json({
            message:`failed finding story`,
            error
        })
    }
}



module.exports={
    getStory,
    storyBeginning,
    addChapter,
    getChapters
}