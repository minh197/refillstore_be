const mongoose = require("mongoose")
const commentSchema = new mongoose.Schema({
    userName: String,
    comment: String,
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    }
    
})


const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment