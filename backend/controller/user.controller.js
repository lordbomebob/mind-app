const userModel=require(`../models/user.model`);
//const bcrypt=require('bcrypt')
const jwt = require(`jsonwebtoken`)


const RegisterUser = async (req,res) =>{
    const userBody=req.body;

    //check if missing info
    if(!userBody.username ){
        
        return res.status(400).json({
            message:`username missing`
        })
    }
    if(!userBody.password){
        return res.status(400).json({
            message:`password missing`
        })
    }

    //checks if the user in the database
    const userExist = await userModel.findOne({username:userBody.username})

    if (userExist){
        return res.status(403).json({
            message: `user already exists, use another username`
        })
    }
    //to encrypt if needed
    //const encryptedPassword= await bcrypt.hash(userBody.password,1)
    const newUser= new userModel({
        username:userBody.username,
        password:userBody.password//encryptedPassword
    })

    try{
        const savedUser = await newUser.save()
        return res.status(201).json({
            message: `user registerd succesfully`,
            data: savedUser
        })
    }catch(error){
        return res.status(500).json({
            message: `there was a error`,
            error
        })
    }
}


const getUser= async (req,res)=>{
    try{
        const users = await userModel.find()
        return res.status(200).json({
            message:`found the users`,
            data:users
            
        })
    }catch(error){
        return res.status(500).json({
            message:`failed finding users`,
            error
        })
    }
}

const loginUser = async (req,res)=>{
    const userBody = req.body
    if(!userBody.username || !userBody.password){
        return res.status(400).json({
            message:`username, password missing`
        })
    }
    const userExist = await userModel.findOne({username:userBody.username})

    if(!userExist){
        return res.status(401).json({
            message:"user doesn't exist"
        })

    }
    const isPasswordSame= (userBody.password=== userExist.password)//await bcrypt.compare(userBody.password,userExist.password)
    if(!isPasswordSame){
        return res.status(401).json({
            message:`wrong credential`
        })
    }
    
//    const accessToken = jwt.sign({
//        username:userExist.username,
//        id:userExist._id
//    },process.env.JWT_SECRET_KEY)

    const userData={
        id:userExist._id,
        username:userExist.username,
    }

    return res.status(200).json({
        message:`user logged in`,
        data:userData
    })
}
module.exports={
    RegisterUser,
    getUser,
    loginUser
}