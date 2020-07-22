const Comment = require("../models/Comment.js")

const getComment = async (req, res) => {
    const comments = await (await Comment.findById(req.params.id));
    res.send(comments);
};

const getAllCommentsOfaProduct = async (req, res) => {
    const productId = req.params.id
    const comments = await Comment.find({product: productId})
    res.send(comments);
}

const createComment= async (req, res) => {
    const {userName, comment, product } = req.body;
   
    console.log(req.body);
    try {
    const newComment = await Comment.create({
        userName,
        comment,
        product
    });
    console.log(newComment);
    res.send(newComment);
} catch (err) {
    console.log(err)
}
   
};


module.exports = {
   createComment,
   getComment,
   getAllCommentsOfaProduct

}
