const products = [];

exports.getAddProductPage = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add New Products',
        path: '/admin/add-product'
    })
}

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    })
}