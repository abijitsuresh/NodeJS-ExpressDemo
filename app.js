var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var urlEncodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    res.render('index');
    //res.sendFile(__dirname + '/index.html');
});
app.get('/home', function(req, res){    
    res.render('index');
    //res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query}); // query string
});
app.post('/contact', urlEncodedParser, function(req, res){
    
    res.render('contact-success', {data: req.body});
});

app.get('/user/:id', function(req, res){
    var data = {name: 'Abijit', age: 26, hobbies: ['gaming', 'fishing', 'eating']};
    res.render('user', {id: req.params.id, data: data});
});

app.listen(3000, '127.0.0.1');
