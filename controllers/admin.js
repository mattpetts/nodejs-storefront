const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    res.render('admin/products', {
        pageTitle: 'Admin Products',
        path: '/admin/products'
    })
}

exports.getAddProductPage = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add New Products',
        path: '/admin/add-product'
    })
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}