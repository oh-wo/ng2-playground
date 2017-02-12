const express = require('express');
const usersApi = express();
const users = require('../userService');

usersApi.get('/', (req, res) => {
    const user = users.find(user => user.id === req.decoded.id);

    if (user) {
        return res.send(user);
    } else {
        return res.status(404).send();
    }
});

module.exports = usersApi;
