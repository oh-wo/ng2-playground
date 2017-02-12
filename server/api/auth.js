const express = require('express');
const authApi = express();
const jwt    = require('jsonwebtoken');
const users = require('../userService');


/**
 * Login
 */
authApi.post('/', (req, res) => {
    const user = users.find(user => user.email === req.body.email && user.password === req.body.password);
    if (user) {
        // if user is found and password is right
        // create a token
        const token = jwt.sign(user, process.env.APP_SECRET, {
            expiresIn: 60*60*24
        });
        return res.send(token);
    } else {
        return res.status(404).send();
    }
});

/**
 * Logout
 */
authApi.delete('/', (req, res) => {
    return res.send(200);
});


module.exports = authApi;