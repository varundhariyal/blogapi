//import express module
const express = require('express')
//import mongoose
const mongoose = require('mongoose')
//import for body-parse used for body param
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

//import appConfig
const appConfig = require('./appConfig/appConfig')
//import middleware
const globalMiddlewareErrorHandler=require('./middlewares/globalError')
const routeLogger=require('./middlewares/routeLogger')
//import route
const routes = require('./routes/routes')
//import model
// const model = require('./models/BlogModel')
const fs=require('fs')
//import helmet
const helmet=require('helmet')

//declaring a instance of express module
const app = express()

//middleware ,should be should before route call
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cookieParser())
//application level middleware for handling global error;
app.use(globalMiddlewareErrorHandler.globalErrorHandler)
//application level route logger
app.use(routeLogger.logIp)


//use helmet instance
app.use(helmet())

//route call
routes.setRoutes(app)

//calling routteError handler middleware after calling routes
// as before route calling,middleware callling will make all  unavailable
app.use(globalMiddlewareErrorHandler.routeNotFound)

// Bootstrap models
let modelsPath = './models'
fs.readdirSync(modelsPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log(file)
        require(modelsPath + '/' + file)
    }
  })
  // end Bootstrap models


//server listen
app.listen(appConfig.port, () => { //callback function
    //calling mongodb string
    //mongoose connect
    let db = mongoose.connect(appConfig.db.uri, {
        useNewUrlParser: true
    })
})

//mongoose error handling
mongoose.connection.on('error', function (err) {
    console.log(err)
    console.log('Database connection error')
})
//handle connection success event
mongoose.connection.on('open', function (err) {
    if (err) {
        console.log("database error");
        console.log(err);
    }
    else {
        console.log("database connection successfully");
    }
})