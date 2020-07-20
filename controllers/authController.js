const axios = require("axios");
const User = require("../models/User.js")
const mongoose = require("mongoose")
var Schema = mongoose.Schema;
const schema = new Schema();

schema.statics.findOneOrCreate = async function ({ email, name }) {
    // `this` refers to User model
    let user = await this.findOne({ email });
    if(!user){
        user = await this.create({ 
            email: email, name: name
        })
    }
    return user
}
exports.loginFacebook = async (req,res,next) =>{
    const fbToken = req.query.token;
    console.log("what is my fb token", fbToken)
    if(!fbToken ){
        return res.status(401).json({status: "fail", error:"need token"})
    } 
    try{
        const data = await axios.get(`https://graph.facebook.com/me?fields=id,name&access_token=${fbToken}`)
        console.log(data)
        const user = await User.findOneOrCreate({name:data.data.name ,
             email: data.data.email})
        
        
        
    }
    catch (err){
        console.log(err)
    }
    const token = await user.generateToken()
    res.json({status: "ok",data:user, token })
    // const user = await User.findOneOrCreate({})
}

