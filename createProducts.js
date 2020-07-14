const Products = require("./models/Products")
const faker = require("faker")

const n_samples = parseInt(process.argv[2])


const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/refillstore")


async function createProducts( n_samples){
    for(let i=0; i<n_samples; i++){
        let item = await Products.create({
            title: String,
            pictureURL: String,
            price:Number,
            origin: String,
            materials: String,
            description:String,
            howToUse: String
        })
    }
}