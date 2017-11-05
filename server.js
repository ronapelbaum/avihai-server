const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');
const db = require('./file-db')({file: './data1.json'});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
})); 

app.use(logger());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/data', (req, res) => {
	res.send(db.get());
});
app.post('/data', (req) => {
	db.put(req.body);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
