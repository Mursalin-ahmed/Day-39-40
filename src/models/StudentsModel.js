const moongose = require('mongoose')

const DataSchema = moongose.Schema({
    Name : String,
    Roll : String,
    Class : String,
    Remarks : String
})
const StudentsModel = moongose.model("students",DataSchema);
module.exports=StudentsModel;