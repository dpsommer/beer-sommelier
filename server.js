var express = require('express'),
    app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.set('view engine', 'pug');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
    res.render('index', {title: 'Beer Sommelier', message: 'Hello World!'});
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});