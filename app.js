var express = require('express');
var logger = require('morgan');
const mongoose = require("mongoose")
const cors = require("cors")

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/product');

var app = express();

app.use(logger('dev'));
app.use(express.json());
mongoose.connect("mongodb://localhost/refillstore" )

app.use('/', indexRouter);
app.use('/product', productsRouter);
app.use(cors())

module.exports = app;
