var express = require('express');
var path = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express()
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lagunitamovie'
});

app.use(function (req, res, next) {
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
     res.setHeader('Access-Control-Allow-Credentials', true);
     next();
 });

 //connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql connected..');
});

//get
app.get('/getposts', (req, res) =>{

    let sql = 'SELECT * FROM movie';
    let query = db.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});


app.listen(8080, function () {

 console.log('Example app listening on port 8080!')
})
