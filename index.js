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
  courseNames.push(data[i].coursename);
}

var courseLengths = [];
for (i = 0; i < data.length; i++) {
  courseLengths.push(data[i].courselength);
}

var courseTypes = [];
for (i = 0; i < data.length; i++) {
  courseTypes.push(data[i].coursetype);
}

var courseCredits = [];
for (i = 0; i < data.length; i++) {
  courseCredits.push(data[i].credit);
}
/*
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
var separatedCredits = [];
for (i = 0; i < courseCredits.length; i++) {
  var itemSplit = [];
  itemSplit = courseCredits[i].split(', ');
  for (i = 0; i < itemSplit.length; i++) {
    separatedCredits.push(itemSplit[i]);
  }
}*/
//var allCredits = [];
//allCredits = separatedCredits.filter(onlyUnique);

app.get('/courseNames', function(req, res) {
  res.send(courseNames);
});

app.get('/courseLengths', function(req, res) {
  res.send(courseLengths);
});

app.get('/courseTypes', function(req, res) {
  res.send(courseTypes);
});

app.get('/courseCredits', function(req, res) {
  res.send(courseCredits);
});
/*
app.get('/allCredits', function(req, res) {
  res.send(separatedCredits);
});
*/
app.listen(100, () => console.log('Listening on port 100'));