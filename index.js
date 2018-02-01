var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('src', {extensions: 'json'}));

router.get('/', function(req, res, next) {
  res.send('src/index.html');
});

router.get('/data', function(req, res, netxt) {
  res.sendFile('src/data.json');
});

app.listen(100, () => console.log('Listening on port 100'));
