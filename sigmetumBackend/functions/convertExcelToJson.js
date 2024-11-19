const XLSX = require('xlsx');

const convertExcelToJson = (filePath) => {
    const workbook = XLSX.readFile(filePath);
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    const columnMapping = {
        "Provincia": "Provincia",
        "Municipio": "Municipio",
        "Alt. Media": "Altitud Media",
        "Sector Biog.": "Sector Biogeográfico",
        "Piso Biocl.": "Piso Bioclimático",
        "Ombrot.": "Ombrotipo",
        "Nat. Sustr.": "Naturaleza del Sustrato",
        "Tipo Serie": "Tipo de Serie",
        "Serie Veget.": "Serie de Vegetación",
        "Veg. Pot.": "Vegetación Potencial",
        "Esp. Recom.": "Especies Características",
        "Esp. Características.": "Especies Características",
    };

    const processedData = jsonData.map(row => {
        const processedRow = {};
    
        for (const [key, value] of Object.entries(row)) {
            const formattedKey = columnMapping[key] || key;
            if (!formattedKey.startsWith('__EMPTY') && value !== null && value !== '') {
                if (typeof value === 'string' && value.includes(',')) {
                    processedRow[formattedKey] = value.split(',').map(item => item.trim()).filter(item => item !== '');
                } else {
                    processedRow[formattedKey] = value;
                }
            }
        }
    
        return processedRow;
    });

    return processedData;
};

module.exports = { convertExcelToJson };