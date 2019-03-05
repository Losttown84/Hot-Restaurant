var express = require('express');
var app = express();

app.get('/', function (req, res) {
	console.log('home page');
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/', function (req, res) {
	console.log('view tables');
	res.sendFile(path.join(__dirname, '/view.html'));
});

app.get('/', function (req, res) {
	console.log('make reservation');
	res.sendFile(path.join(__dirname, '/make.html'));
});

