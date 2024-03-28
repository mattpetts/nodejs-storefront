// require nodejs core modules
const path = require('path');

// require external modules
const express = require('express');
const bodyParser = require('body-parser');

// instantiate express
const app = express();

// Import a templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// require bespoke routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// Catch-all middleware to handle 404s
app.use((req, res, next) => {
    res.render('404', {pageTitle: 'Page not found!'});
})

// Create an instance of our app
app.listen(3000);