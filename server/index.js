const express = require('express');
const app = express();
const api = require('./api/api');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const path = require('path');

// TODO Delete and set this properly.
process.env.APP_SECRET = 'secret!';

app.use(cors());

app.use(compression());

app.use(bodyParser.json());

app.use('/api/v1', api);

app.use(express.static(path.join(__dirname, '../ui/dist')));

app.use('*', express.static(path.join(__dirname, '../ui/dist')));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`ng2 playground running on port ${port}`));