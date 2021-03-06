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


var reservations= [
	{
	name:"Brandon",
	phone:"555-555-5555",
	email:"test@test.com",
	uniqueId:"unique"
},
{
	name:"Brandon",
	phone:"555-555-5555",
	email:"test@test.com",
	uniqueId:"unique"
},
{
	name:"Brandon",
	phone:"555-555-5555",
	email:"test@test.com",
	uniqueId:"unique"
},
{
	name:"Brandon",
	phone:"555-555-5555",
	email:"test@test.com",
	uniqueId:"unique"
},
{
	name:"5",
	phone:"555-555-5555",
	email:"test@test.com",
	uniqueId:"unique"
}
]
var waitList= [
	{
	name:"Chad",
	phone:"111-111-1111",
	email:"test2@test.com",
	uniqueId:"myID"

}
]

app.get('/', function (req, res) {
	console.log('home page');
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/view', function (req, res) {
	console.log('view tables');
	res.sendFile(path.join(__dirname, '/view.html'));
});

app.get('/make', function (req, res) {
	console.log('make reservation');
	res.sendFile(path.join(__dirname, '/make.html'));
});
app.get("/api/reservation", function(req, res) {
	return res.json(reservations);
  });

app.get("/api/waitlist", function(req, res) {
	return res.json(waitList);
  });

app.post("/api/waitlist", function(req, res) {
	return res.json(waitList);
  });

app.post("/api/reservation", function(req, res) {
	console.log("successfully reserver!")
	console.log(req.body)
	var newReso = req.body
	if (reservations.length >= 5){
		waitList.push(newReso)
	}
	else{
	reservations.push(newReso)
	}
	console.log(reservations)
	return res.json(reservations)
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
  });

