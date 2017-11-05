const express = require('express');
const bodyParser = require('body-parser');

const logger =  (req, res, next) => {
	console.log(Date.now(), req.method, req.url);
	next();
};

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.all('*', logger);

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/data', (req, res) => res.send(`data: ${JSON.stringify(req.body)}`));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
