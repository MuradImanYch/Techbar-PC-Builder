const db = require('../db.js');

module.exports.save = (req, res) => {
    db.query('INSERT INTO readymade (customer, cpu, mb, ram, videocard, storage, psu, cases, cooler, caseFan, monitor, watt, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [JSON.stringify(req.body.saveName), JSON.stringify(req.body.cpu), JSON.stringify(req.body.mb), JSON.stringify(req.body.ram), JSON.stringify(req.body.videocard), JSON.stringify(req.body.storage), JSON.stringify(req.body.psu), JSON.stringify(req.body.case), JSON.stringify(req.body.cooler), JSON.stringify(req.body.caseFan), JSON.stringify(req.body.monitor), JSON.stringify(req.body.watt), JSON.stringify(req.body.price)], (err => {
        if(err) throw err;
    }));
}
module.exports.get = (req, res) => {
    db.query('SELECT * FROM readymade', ((err, result) => {
        res.send(result);
    }));
}