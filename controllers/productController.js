const Product = require("../models/Products.js")
const PAGE_SIZE =25; 
const getAllTheProducts = async(req,res)=>{
const pageNum = req.query.page || 1;
const numToSkip = (parseInt(pageNum)-1)*PAGE_SIZE; 
const products = await Product
.find()
.limit(PAGE_SIZE)
.skip(numToSkip)
.sort({price: 1});
const numProducts = await Product.countDocuments();
res.send({
    message:"ok",
    data: products,
    maxPageNum: Math.ceil(numProducts/ PAGE_SIZE)

})
}





const getSingleProduct = async (req, res) => {
    const products = await (await Product.findById(req.params.id));
    res.send(products);
};



module.exports = {
    getAllTheProducts,
    getSingleProduct
}