export const convertToCSV = (data) => {
  if (data.length === 0) return '';

  const headers = Object.keys(data[0]);
  const csvRows = [
    headers.join(','),
    ...data.map(item => headers.map(header => JSON.stringify(item[header], replacer)).join(',')) // Filas
  ];

  return csvRows.join('\n');
};

const replacer = (key, value) => value === null ? '' : value;

export const downloadCSV = (filteredData) => {
  const csv = convertToCSV(filteredData);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', 'data.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};