const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const UserSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true,
        unique: true,
       
    },
    name:{
        type: String,
        required: true, 
        trim: true
    }

    
})


// generate TOken
UserSchema.methods.generateToken = async function () {
    const token = jwt.sign({
        _id: this._id,
       email: this.email,
       name : this.name
    }, process.env.SECRET, { expiresIn: "7d" });
    return token
}

UserSchema.statics.findOneOrCreate = async function ({ email, name }) {
    // `this` refers to User model
    let user = await this.findOne({ email });
    if(!user){
        user = await this.create({ 
            email: email, name: name
        })
    }
    return user
}


const User = mongoose.model("User", UserSchema)

module.exports = User