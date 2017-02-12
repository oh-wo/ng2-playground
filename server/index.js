const express = require('express');
const app = express();
const api = require('./api/api');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');

// TODO Delete and set this properly.
process.env.APP_SECRET = 'secret!';

// Enable cross origin requests.
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE");
//     res.header("Access-Control-Request-Headers", "x-access-token");
//     next();
// });
app.use(cors());

app.use(compression());

app.use(bodyParser.json());

app.use('/api/v1', api);

const port = process.env.PORT || 3000;

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});