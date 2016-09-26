var express = require('express');
var app = express();
// app.engine('html', function() {});
app.use(express.static('views'));

app.use('/', function(req, res) {
    res.send('index.html');
})

app.listen(4444, function() {
    console.log('listening');
});
