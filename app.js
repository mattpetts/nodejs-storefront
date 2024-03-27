// require external modules
const express = require('express');
const bodyParser = require('body-parser');

// instantiate express
const app = express();

// require bespoke routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRoutes);
app.use(frontEndRoutes);

// Catch-all middleware to handle 404s
app.use((req, res, next) => {
    res.status(404).send('<h1>404</h1>');
})

// Create an instance of our app
app.listen(3000);