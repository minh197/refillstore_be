const axios = require("axios");
const User = require("../models/User.js")
const mongoose = require("mongoose")


exports.loginFacebook = async (req,res,next) =>{
    const fbToken = req.query.token;
    console.log("what is my fb token", fbToken)
    if(!fbToken ){
        return res.status(401).json({status: "fail", error:"need token"})
    } 
    try{
        const data = await axios.get(`https://graph.facebook.com/me?fields=id,name,email&access_token=${fbToken}`)
        console.log(data)
        const user = await User.findOneOrCreate({name:data.data.name ,
         email: data.data.email})
        const token = await user.generateToken()
        return res.redirect(`http://localhost:3000/home/?token=${token}`) 
    }
    catch (err){
        return res.redirect('http://localhost:3000/login')
    }
    
    // const user = await User.findOneOrCreate({})
}

