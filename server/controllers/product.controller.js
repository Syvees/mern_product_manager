const Product = require("../models/product.model")

// CREATE
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

// GET ALL
module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => {
            console.log(products);
            res.json(products)
        })
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

// GET ONE
module.exports.getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json({message: "Something went wrong", error:err}));
    }

// UPDATE
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updateProduct => res.json(updateProduct))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

// DELETE
module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}