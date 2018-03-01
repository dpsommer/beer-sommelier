var pug = require('pug'),
    express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set up body parser
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));

// make express look in the public directory for assets (css/js/img)
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');

app.post('/search', function (req, res) {
  console.log(req.body)
  console.log('Submitted a search request')
});

// set the home page route
app.get('/', function(req, res) {
    res.render('index', {title: 'Beer Sommelier', message: 'Beer Sommelier'});
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});