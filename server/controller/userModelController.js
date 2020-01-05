const db = require('../data/userModel');

const userModelController = {}; 

userModelController.createUser = (req, res, next) => {
    const { username, password, age } = req.body;
    console.log('age: ', )
    const text = `
            INSERT INTO users (username, password, age) 
            values($1, $2, $3)
        `
    const values = [username, password, age];

    db.query(text, values)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    next();
}

userModelController.getUser = (req, res, next) => {
    const { username, password } = req.body;
    const text = `SELECT username FROM users WHERE username = ${username} AND password = ${password}`;
    db.query(text)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    next();
}

module.exports = userModelController;