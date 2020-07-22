var express = require('express');
var router = express.Router({mergeParams:true});
const {getAllTheProducts, createProduct,getSingleProduct} = require("../controllers/productController") 
const {getComment, createComment,getAllCommentsOfaProduct} = require("../controllers/commentController") 




router.route("/")
.get(getAllTheProducts)
.post(createProduct)

router.route("/comment")
.get(getComment)
.post(createComment)



router.route("/:id")
.get(getSingleProduct)

//router.route("/comments/:id").get(getAllCommentsOfaProduct)

module.exports = router;
