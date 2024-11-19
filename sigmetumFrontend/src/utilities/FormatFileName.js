export const FormatFileName = (fileName) => {
    const nameMatch = fileName.match(/^([A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]+)_/);
    const name = nameMatch ? nameMatch[1] : '';

    const versionMatch = fileName.match(/_V(\d+)_/);
    const version = versionMatch ? `V${parseInt(versionMatch[1])}` : '';

    const dateMatch = fileName.match(/_(\d{2})_(\d{2})_(\d{4})\.json/);
    if (dateMatch) {
        const [_, day, month, year] = dateMatch;
        const formattedDate = `${day}/${month}/${year}`;
        return `${name} ${version} (${formattedDate})`;
    }
    
    return fileName;
}