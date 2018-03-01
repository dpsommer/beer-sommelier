var express = require('express'),
    app = express();

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(8080, () => console.log('Node js example app'))