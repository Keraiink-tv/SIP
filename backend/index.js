const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const dbobs = require('./src/dbops');

const Port = 8000; 

const connection = mysql.createConnection({
    host    : '127.0.0.1',
    user    : 'root',
    password: '',
    database: 'drinksproject'
});


connection.connect(function(err) {
    if (err) throw err;
    console.log('connected');
});

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(dbobs(connection));

app.listen(Port, function() {
    console.log('server is running on localhost: ' + Port)
});

app.get('/', function(req, res) {
    res.send('hello Monica')
});

app.post('/', function(req, res) {
    res.status(200).send({
        'message enroll':'data recieved'
    })

});