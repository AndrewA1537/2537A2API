const express = require("express");
const app = express();

var bulbasaur = require('./1.json');
var pikachu = require('./25.json');

app.listen(process.env.PORT || 7000, function(err) {
    if (err) console.log(err);
});


// routes

app.get('/', function(res) {
    res.send(bulbasaur);
});

app.get('/pokemon/25', function(res) {
    res.send(pikachu);
});