import * as XLSX from 'xlsx';

export const convertToXLSX = (data) => {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sigmetum-A');

  return workbook;
};

export const downloadXLSX = (filteredData) => {
  const modifiedData = filteredData.map(row => {
    Object.keys(row).forEach(key => {
      if (Array.isArray(row[key])) {
        row[key] = row[key].join(', ');
      }
    });
    return row;
  });

  const workbook = convertToXLSX(modifiedData);

  const xlsxBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([xlsxBuffer], { type: 'application/octet-stream' });

  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.setAttribute('download', 'Sigmetum-A.xlsx');
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};