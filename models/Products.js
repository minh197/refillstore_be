const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: String,
    pictureUrl: String,
    price:Number,
    origin: String,
    materials: String,
    description:String,
    howToUse: String,
    owner: String,
})


const Product = mongoose.model("Product", productSchema)

module.exports = Product