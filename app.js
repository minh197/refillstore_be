var express = require('express');
var logger = require('morgan');
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
var indexRouter = require('./routes/index');
var productsRouter = require('./routes/product');
var authRouter = require('./routes/auth')
var app = express();

app.use(logger('dev'));
app.use(express.json());
// DB Config
 const mongoURI = process.env.MONGO_URI
mongoose.Promise = global.Promise;

let defaults = {};
Promise.resolve(app)
  .then(MongoDBConnection)
  .catch((err) =>
    console.error.bind(
      console,
      `MongoDB connection error: ${JSON.stringify(err)}`
    )
  );

// Database Connection
async function MongoDBConnection(app) {
  console.log(`| MongoDB URL  : ${mongoURI}`);
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log("| MongoDB Connected");
  console.log("|--------------------------------------------");

  return app;
}

app.use(cors())
app.use('/', indexRouter);
app.use('/product', productsRouter);

app.use('/auth', authRouter)
module.exports = app;
