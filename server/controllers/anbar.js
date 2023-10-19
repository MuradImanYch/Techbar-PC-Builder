const db = require('../db.js');

module.exports.cpuAdd = (req, res) => {
    db.query('INSERT INTO cpu (name, socket, baseFreq, boostFreq, watt, price, img) VALUES(?, ?, ?, ?, ?, ?, ?)', [req.body.cpuName, req.body.cpuSocket, req.body.cpuBaseFreq, req.body.cpuBoostFreq, req.body.cpuWatt, req.body.cpuPrice, req.body.cpuImg], (err => {
        if(err) throw err;
    }));
}
module.exports.cpuGet = (req, res) => {
    db.query('SELECT * FROM cpu', ((err, result) => {
        res.send(result);
    }));
}
module.exports.mbAdd = (req, res) => {
    db.query('INSERT INTO mb (name, socket, formFaktor, ramType, price, img) VALUES(?, ?, ?, ?, ?, ?)', [req.body.mbName, req.body.mbSocket, req.body.mbFormFaktor, req.body.mbRamType, req.body.mbPrice, req.body.mbImg], (err => {
        if(err) throw err;
    }));
}
module.exports.mbGet = (req, res) => {
    db.query('SELECT * FROM mb', ((err, result) => {
        res.send(result);
    }));
}
module.exports.ramAdd = (req, res) => {
    db.query('INSERT INTO ram (name, memory, ramType, freq, price, img) VALUES(?, ?, ?, ?, ?, ?)', [req.body.ramName, req.body.ramMemory, req.body.ramType, req.body.ramFreq, req.body.ramPrice, req.body.ramImg], (err => {
        if(err) throw err;
    }));
}
module.exports.ramGet = (req, res) => {
    db.query('SELECT * FROM ram', ((err, result) => {
        res.send(result);
    }));
}
module.exports.gpuAdd = (req, res) => {
    db.query('INSERT INTO videocard (name, vram, watt, freq, price, img) VALUES(?, ?, ?, ?, ?, ?)', [req.body.gpuName, req.body.gpuVram, req.body.gpuWatt, req.body.gpuFreq, req.body.gpuPrice, req.body.gpuImg], (err => {
        if(err) throw err;
    }));
}
module.exports.gpuGet = (req, res) => {
    db.query('SELECT * FROM videocard', ((err, result) => {
        res.send(result);
    }));
}
module.exports.storageAdd = (req, res) => {
    db.query('INSERT INTO storage (name, type, capacity, price, img) VALUES(?, ?, ?, ?, ?)', [req.body.storageName, req.body.storageType, req.body.storageCapacity, req.body.storagePrice, req.body.storageImg], (err => {
        if(err) throw err;
    }));
}
module.exports.storageGet = (req, res) => {
    db.query('SELECT * FROM storage', ((err, result) => {
        res.send(result);
    }));
}
module.exports.psuAdd = (req, res) => {
    db.query('INSERT INTO psu (name, watt, price, img) VALUES(?, ?, ?, ?)', [req.body.psuName, req.body.psuWatt, req.body.psuPrice, req.body.psuImg], (err => {
        if(err) throw err;
    }));
}
module.exports.psuGet = (req, res) => {
    db.query('SELECT * FROM psu', ((err, result) => {
        res.send(result);
    }));
}
module.exports.caseAdd = (req, res) => {
    db.query('INSERT INTO cases (name, formFaktor, price, img) VALUES(?, ?, ?, ?)', [req.body.caseName, req.body.caseFormFaktor, req.body.casePrice, req.body.caseImg], (err => {
        if(err) throw err;
    }));
}
module.exports.caseGet = (req, res) => {
    db.query('SELECT * FROM cases', ((err, result) => {
        res.send(result);
    }));
}
module.exports.coolerAdd = (req, res) => {
    db.query('INSERT INTO cooler (name, type, tdp, price, img) VALUES(?, ?, ?, ?, ?)', [req.body.coolerName, req.body.coolerType, req.body.coolerTdp, req.body.coolerPrice, req.body.coolerImg], (err => {
        if(err) throw err;
    }));
}
module.exports.coolerGet = (req, res) => {
    db.query('SELECT * FROM cooler', ((err, result) => {
        res.send(result);
    }));
}
module.exports.caseFanAdd = (req, res) => {
    db.query('INSERT INTO caseFan (name, size, price, img) VALUES(?, ?, ?, ?)', [req.body.caseFanName, req.body.caseFanSize, req.body.caseFanPrice, req.body.caseFanImg], (err => {
        if(err) throw err;
    }));
}
module.exports.caseFanGet = (req, res) => {
    db.query('SELECT * FROM caseFan', ((err, result) => {
        res.send(result);
    }));
}
module.exports.monitorAdd = (req, res) => {
    db.query('INSERT INTO monitor (name, size, resolution, technology, freq, price, img) VALUES(?, ?, ?, ?, ?, ?, ?)', [req.body.monitorName, req.body.monitorSize, req.body.monitorResolution, req.body.monitorType, req.body.monitorFreq, req.body.monitorPrice, req.body.monitorImg], (err => {
        if(err) throw err;
    }));
}
module.exports.monitorGet = (req, res) => {
    db.query('SELECT * FROM monitor', ((err, result) => {
        res.send(result);
    }));
}