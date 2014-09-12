var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
    question:String,
    A:String,
    B:String,
    C:String,
    D:String,
   answer:String,
   result:String

});

mongoose.model("schema", schema);
mongoose.connect("mongodb://localhost/milion");

module.exports = mongoose;