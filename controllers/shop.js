const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    res.render('shop/index', {
        pageTitle: 'Shop',
        path: '/',
    })
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products',
            hasProducts: products.length > 0,
        })
    });
}

exports.getProductDetails = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, (product) => {
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product.title,
            path: '/products'
        })
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders',
    })
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart',
    })
}

exports.getCheckout = (req, res, next) => {
        res.render('shop/checkout', {
            pageTitle: 'Checkout',
            path: '/checkout',
        })
}