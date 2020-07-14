var express = require('express');
var router = express.Router();
const {getAllTheProducts} = require("../controllers/productController") 

router.get('/', getAllTheProducts);

module.exports = router;
