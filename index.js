var express = require('express');
var app = express();
var router = express.Router();
var data = require('./src/data.json');

app.use(express.static(__dirname + '/src'));

app.use(express.static('src', {extensions: 'json'}));

router.get('/', function(req, res, next) {
  res.send('src/index.html');
});

router.get('/data', function(req, res, next) {
  res.sendFile('src/data.json');
});

var courseNames = [];
for (i = 0; i < data.length; i++) {
  courseNames.push(data[i].course_name);
}

app.get('/courseNames', function(req, res) {
  res.send(courseNames);
  //res.sendJson(data.findAll);
});


app.listen(100, () => console.log('Listening on port 100'));