const Product = require("../models/Products.js")
const Comment = require("../models/Comment.js")
const PAGE_SIZE =25; 
const getAllTheProducts = async(req,res)=>{
const pageNum = req.query.page || 1;
const minPrice = req.query.minPrice || 1;
const maxPrice = req.query.maxPrice || 1000;

const numToSkip = (parseInt(pageNum)-1)*PAGE_SIZE; 
const products = await Product
.find(
    {price: {$gte: minPrice, $lte: maxPrice}}
)
.limit(PAGE_SIZE)
.skip(numToSkip)
.sort({price: 1});
const numProducts = await Product.countDocuments(
   {price: {$gte: minPrice, $lte: maxPrice}}

);
res.send({
    message:"ok",
    data: products,
    maxPageNum: Math.ceil(numProducts/ PAGE_SIZE)

})
}





const getSingleProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    const comments = await Comment.find({product: req.params.id})
    res.send({product:product, comments:comments});
};


const createProduct= async (req, res) => {
    const title = req.body.title;
    const pictureUrl = req.body.pictureUrl;
    const origin = req.body.origin;
    const price = req.body.price;
   
    const materials=req.body.materials
    const description = req.body.description;
    
    const howToUse = req.body.howToUse;
    const owner = req.body.owner;

    
  
    console.log(req.body);
    try {
    const newProduct = await Product.create({
        title,
        pictureUrl,
        price,
        origin,
        description,
        materials,
        howToUse,
        owner
    });
    console.log(newProduct);
    res.send(newProduct);
} catch (err) {
    console.log(err)
}
    // res.send("okk")
};



module.exports = {
    getAllTheProducts,
    getSingleProduct,
    createProduct
}