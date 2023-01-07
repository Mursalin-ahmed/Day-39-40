const express=require('express');
const router = require('./src/routes/api');

const app = new express();


//security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')
const mongoose = require('mongoose')

//Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

//Request rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 *1000,
    max: 100
});
app.use(limiter);


//Mongo Db database connection
let URI = "mongodb://127.0.0.1:27017/Schools"
let OPTION={user:'',pass:''}
mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection success")
    console.log(error)
})


//Routing
app.use("/api/v1",router)



//undefined routes
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"not found"})
})

module.exports=app;
//  baesurl/api/v1/hello-get