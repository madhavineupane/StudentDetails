var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

require('./model/moviemodel');

mongoose.connect('mongodb://127.0.0.1:27017/newDB', { useNewUrlParser: true}, {useUnifiedTopology: true });


const db =  mongoose.connection;
db.once('open',function(){
    console.log("we are connected--")
});

const moviecontroller = require('./controller/moviecontroller');
app.get('/movies',moviecontroller.getallmovies);
app.get('/movies/findbyname',moviecontroller.getbyname);

app.listen('3000');





