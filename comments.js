//create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//serve static files
app.use(express.static('public'));

//create route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//create route
app.get('/comments', (req, res) => {
    res.sendFile(__dirname + '/public/comments.html');
});

//create route
app.get('/comments', (req, res) => {
    res.sendFile(__dirname + '/public/comments.html');
});

//create route
app.get('/comments', (req, res) => {
    res.sendFile(__dirname + '/public/comments.html');
});

//create route
app.get('/comments', (req, res) => {
    res.sendFile(__dirname + '/public/comments.html');
});

//create route
app.get('/comments', (req, res) => {
    res.sendFile(__dirname + '/public/comments.html');
});

//create route
app.get('/comments', (req, res) => {
    res.sendFile(__dirname + '/public/comments.html');
});

//create route
app.get('/comments', (req, res) => {
    res.sendFile(__dirname + '/public/comments.html');
});

//create route
app.get('/comments', (req, res) => {
    res.sendFile(__dirname + '/public/comments.html');
});

//create route
app.get('/comments', (req, res) => {
    res.sendFile(__dirname + '/public/comments.html');
});