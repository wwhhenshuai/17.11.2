var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'yuanfang',
    database: 'news'
})
router.post('/shuju', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    connection.query('SELECT * FROM xinwen', function(err, rows, fields) {
        res.send(rows)
    })
});

router.post('/add', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    var title = req.body.a;
    var content = req.body.b;
    console.log(title, content)
    connection.query('INSERT INTO xinwen (nav,xq) VALUES ("' + title + '","' + content + '")',
        function(err, rows, fields) {
            res.send(rows)
        })
})

module.exports = router;