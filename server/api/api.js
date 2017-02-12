const express = require('express');
const api = express();
const secure = require('../secure');

// Don't secure this.
api.use('/auth', require('./auth'));

api.use(secure);

api.use('/users', require('./users'));


module.exports = api;