var express = require('express');
var app = express();

//app.get('/data', (req, res) => res.sendFile('data.json'));
app.use(express.static('.', {extensions: 'json'}))
app.listen(4201, () => console.log('Listening at 4201'));