const express = require ('express');
const userModelController = require('../controller/userModelController');
const signup = express.Router();
const path = require('path');

signup.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../client/signup.html'));
});

signup.post('/', userModelController.createUser, (req, res) => {
    res.status(200).redirect('/profile');
})

module.exports = signup;