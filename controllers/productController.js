const Product = require("../models/Products.js")


const getAllTheProducts = async(req,res)=>{
const products = await Product.find();
res.send({
    message:"ok",
    data: products

})
}

module.exports = {
    getAllTheProducts
}