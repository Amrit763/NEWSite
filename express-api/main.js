const express = require('express')();
const app = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path')

const config = require('./config/index');
require('./config/dbConnection');

const authRoutes = require('./controllers/auth.routes');
const userRoutes = require('./controllers/user.routes');
const newRoutes = require('./controllers/news.routes');
express.use(bodyParser.urlencoded({ extended: false }));
express.use(bodyParser.json());
express.use(morgan('dev'));
express.use(cors());

express.use('/files/images', app.static(path.join(__dirname, 'files/images')));


express.use('/auth', authRoutes);
express.use('/user', userRoutes);
express.use('/news', newRoutes);


express.use((req, res, next) => {
    next({
        message: '404 Page Not Found'
    })
})

express.use((err, req, res, next) => {
    res.status(err.status || 400);
    res.json({
        message: err.message || err
    })
})

express.listen(config.port, (err, done) => {
    if (err) {
        console.log('Server Connection Failed');
    } else {
        console.log('Server Listening at ', config.port);
    }
})