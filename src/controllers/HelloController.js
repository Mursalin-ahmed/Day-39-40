

exports.Hello=(req,res)=>{
    res.status(200).json({status:"success",data:"Hello this is my first rest api"})
}

exports.Hello2=(req,res)=>{
    res.status(200).json({status:"success",data:"This is for learning"})
}