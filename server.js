const express = require('express')
// const bodyParser = require('body-parser');

const app = express()

// app.use(bodyParser);

app.all('*', (req, res, next) => {
	console.log(Date.now(), req.method, req.url);
	next();
});

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/data', (req, res) => res.send(`data: ${req.body}`));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
