const express=require('express');
const router = require('./src/routes/api');

const app = new express();

app.use("/api/v1",router)



//undefined routes
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"not found"})
})

module.exports=app;
//  baesurl/api/v1/hello-get