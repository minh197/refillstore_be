var express = require('express');
var router = express.Router({mergeParams:true});
const {getAllTheProducts, createProducts,getSingleProduct} = require("../controllers/productController") 



router.route("/")
.get(getAllTheProducts)



router.route("/:id")
.get(getSingleProduct)

module.exports = router;
