var express = require('express'),
    app = express();

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(80, () => console.log('Node js example app'))