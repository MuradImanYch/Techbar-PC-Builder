const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const pswRoutes = require('./routes/psw.js');
const anbarRoutes = require('./routes/anbar.js');
const xlsxExportRoutes = require('./routes/xlsxExport.js');
const saveRoutes = require('./routes/save.js');

app.use('/psw', pswRoutes);
app.use('/anbar', anbarRoutes);
app.use('/xlsx-export', xlsxExportRoutes);
app.use('/save', saveRoutes);

app.listen(8080, (err) => {
    if(err) return err;
    console.log(`Server on 8080 is running...`);
});