var express = require('express');
var router = express.Router();

router.get('/admin', function(req, res) {
    res.render("admin");
});

router.get('/', function(req, res){
    var db = req.app.get('db'),
    schema = db.model('schema');

    schema.find({}, {_id:false, __v:false}).limit(1).exec( function(e, data){

       res.render("index", {schema:data});
    });

});
router.post('/admin', function(req, res){

  var db = req.app.get("db"),
    schema = db.model("schema"),
    question = req.body.question,
      A = req.body.A,
      B = req.body.B,
      C = req.body.C,
      D = req.body.D,
      answer = req.body.answer,
      result = req.body.result;

   schema({question:question, A:A, B:B, C:C, D:D, answer:answer}).save(function(e){
       console.log("success");
   });

});


module.exports = router;
