var express = require('express');
var router = express.Router();

router.get('/admin', function (req, res) {
    if (!req.session.admin) {
        res.redirect('/');
    }
    else {
        res.render("admin");
    }
});

router.get('/login', function (req, res) {
    res.render('login');
});


router.get('/', function (req, res) {
    var db = req.app.get('db'),
        schema = db.model('schema');

    schema.find({}, {_id: false, __v: false}).limit(1).exec(function (e, data) {

        res.render("index", {schema: data});
    });

});

router.post('/login', function (req, res) {
    var username = req.body.username,
        password = req.body.password,
        db = req.app.get('db'),
        admin = db.model('admin');

//     admin({username:"Anna", password:"Anna123"}).save(function (e) {
//             console.log('successfully saved');
//         }
//     );

    admin.find({}, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            //console.log(data, username, password);
            if (username === data[0].username && password === data[0].password) {
                req.session.admin = req.body;
                res.redirect("/admin");
            }
            else {
                console.log("Incorrect username or password");
            }
        }

    });
});

router.post('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/');
});


router.post('/admin', function (req, res) {

    var db = req.app.get("db"),
        schema = db.model("schema"),
        question = req.body.question,
        A = req.body.A,
        B = req.body.B,
        C = req.body.C,
        D = req.body.D,
        answer = req.body.answer,
        result = req.body.result;

    schema({question: question, A: A, B: B, C: C, D: D, answer: answer}).save(function (e) {
        console.log("success");
    });

});


module.exports = router;
