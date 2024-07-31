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
    const storyModel=req.body
    if(!storyModel.storyTitle){
        return res.status(400).json({
            message:`title missing`
        })
    }

    const storyExist = await storyModel.findOne({storyTitle:storyModel.storyTitle})

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
            message: `user registerd succesfully`,
            data: savedStory
        })
    }catch(error){
        return res.status(500).json({
            message: `there was a error`,
            error
        })
    }
}




module.exports={
    getStory,
    storyBeginning
}