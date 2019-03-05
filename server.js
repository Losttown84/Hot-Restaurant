var express = require('express');
var app = express();
var path = require('path')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
  });
  