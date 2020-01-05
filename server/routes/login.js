const express = require ('express');
const userModelController = require('../controller/userModelController');
const login = express.Router();
const path = require('path');

login.get('/', (req, res) =>
    res.status(200).sendFile(path.resolve(__dirname, '../../index.html'))
)

login.post('/profile', userModelController.getUser, (req, res) => {
    res.status(200).redirect('/profile')
})

module.exports = login;