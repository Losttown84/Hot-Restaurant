var express = require("express");
var path = require("path");

var app = express();
var port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.get('/', function (req, res) {
    console.log('home page');
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get('/reserve', function (req, res) {
    console.log('reserve page');
    res.sendFile(path.join(__dirname, ".html"));
    });
app.get("/tables", function (req, res) {
    console.log("Waiting List");
})


var tables = [
    {name: "Yagmur",
    phone: "112782743",
    email: "yagmur@mail.com",
    customerID: 1},
    {
        name: "mike",
    phone: "112782744",
    email: "mike@mail.com",
    customerID: 2

    }];