const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: String,
    pictureURL: String,
    price:Number,
    origin: String,
    materials: String,
    description:String,
    howToUse: String
})


const Product = mongoose.model("Product", productSchema)

module.exports = Product