const db = require('mysql');

const con = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'techbar'
});
con.connect(err => {
    if(err) throw err;
    console.log('Connected to DB');
});

module.exports = con;