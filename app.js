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

app.use("/api/v1",router)



//undefined routes
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"not found"})
})

module.exports=app;
//  baesurl/api/v1/hello-get