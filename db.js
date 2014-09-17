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
var admin = new Schema({
    username: String,
    password: String
});

mongoose.model("schema", schema);
mongoose.model("admin", admin);
mongoose.connect("mongodb://localhost/milion");

module.exports = mongoose;