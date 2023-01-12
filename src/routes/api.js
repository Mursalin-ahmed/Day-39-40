const express=require('express');
const HelloController = require('../controllers/HelloController');
const StudentsController = require('../controllers/StudentsController');
const router = express.Router();

//This is my first get routing
router.get("/hello-get",HelloController.Hello)
router.post("/hello-post",HelloController.Hello2)

//moongose
router.post("/InsertStudent",StudentsController.InsertStudent)

module.exports=router;
