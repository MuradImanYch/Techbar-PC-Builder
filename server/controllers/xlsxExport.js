const XLSX = require('xlsx');

module.exports.xlsxExport = (req, res) => {
    const convertJsonToExcel = () => {
        const workSheet = XLSX.utils.json_to_sheet([{Prosessor: req.body.cpu.name, 'Ana plata': req.body.mb.name, RAM: req.body.ram.name, Videokart: req.body.videocard.name, Yaddaş: req.body.storage.name, 'Qida bloku' : req.body.psu.name, Keys: req.body.case.name, Soyuducu: req.body.cooler.name, 'Keys fan': req.body.caseFan.name, 'Monitor': req.body.monitor.name, 'Toplam Watt': +req.body.cpu.watt + +req.body.videocard.watt + 'W', 'Toplam qiymət': `${+req.body.cpu.price + +req.body.mb.price + +req.body.ram.price + +req.body.videocard.price + +req.body.storage.price + +req.body.psu.price + +req.body.case.price + +req.body.cooler.price + +req.body.caseFan.price + +req.body.monitor.price}₼`}]);
        const workBook = XLSX.utils.book_new();
    
        XLSX.utils.book_append_sheet(workBook, workSheet, "List 1");
        
        XLSX.write(workBook, { bookType: 'xlsx', type: "buffer" });
    
        XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    
        XLSX.writeFile(workBook, `${req.body.exportName}.xlsx`);
    }
    convertJsonToExcel();
}