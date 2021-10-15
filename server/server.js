var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var PORT = 3000;
var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
    res.send('Hello from server');
});

app.post('/enroll', function(req, res) {
    console.log(req.body);
    res.status(200).send({"message": "Data recieve"});
});

app.listen(PORT, function() {
    console.log("Server running on localhost:" + PORT);
});