var express = require('express');
var router = express.Router()
const {loginFacebook} = require("../controllers/authController") 


router.route("/login/facebook").get(loginFacebook)



  

module.exports = router; 