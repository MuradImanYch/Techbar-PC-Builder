const db = require('../db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.psw = async (req, res) => {
    /* const password = "0";
    const salt = await bcrypt.genSalt(10);
    const passwordHash = bcrypt.hash(password, salt);

    const token = jwt.sign({
        password: passwordHash
    }, 'secretkey', {
        expiresIn: '30d'
    });

    db.query('SELECT * FROM password', ((err, result) => {
        result.length > 0 ? db.query(`UPDATE password SET user1 = "${token}"`, (err, result) => {
            if(err) throw err;
        }) : db.query('INSERT INTO password (user1) VALUES(?)', [token], (err => {
            if(err) throw err;
        }));
    })); */
}

module.exports.login = (req, res) => {
    /* db.query(`SELECT * FROM password`, (err, result) => {
        if(err) throw err;

        bcrypt.compare(JSON.stringify(req.body).split('\"')[1], result[0].user1, (err, response) => {
            // if(err) throw err;

            // response ? res.send({message: 'Вход разрешен', auth: true, token: result[0].token}) : res.send({message: 'Неверный логин или пароль', auth: false});
            console.log(response ? '+' : '-');
        });
    }); */
}