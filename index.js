var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var bookRoutes = require('./routes/book-api.js');

app.use('/dest', express.static(__dirname + '/dest'));
app.get('/dest/jquery.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.js'));
});
app.get('/dest/bootstrap.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js', 'bootstrap.js'));
});
app.get('/dest/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css', 'bootstrap.css'));
});

app.get('/api/book/all', bookRoutes.getAll);
app.get('/api/book/:id', bookRoutes.get);
app.post('/api/book', bookRoutes.save);
app.get('/book/add', function (req, res) {
   res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/:id?', function (req, res) {
   res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

