require('dotenv').config();
const { S3 } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');

const s3 = new S3({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESSKEYID,
        secretAccessKey: process.env.AWS_SECRETACCESSKEY,
    },
});

exports.uploadFileToS3 = async (fileName, filePath, folderName) => {
    try {
        const fileStream = fs.createReadStream(filePath);

        const uploadParams = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${folderName}/${fileName}`,
            Body: fileStream,
        };

        const data = await s3.putObject(uploadParams);
        console.log(`Archivo subido con éxito a ${data.Location}`);
        return data.Location;
    } catch (error) {
        console.error(`Error subiendo archivo: ${error.message}`);
        throw error;
    }
};

exports.listFilesInS3Folder = async (folderName) => {
    try {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Prefix: folderName,
        };

        const data = await s3.listObjectsV2(params);

        if (!data.Contents || data.Contents.length === 0) {
            return [];
        }

        return data.Contents
            .filter(file => file.Size > 0)
            .map(file => ({
                name: path.basename(file.Key),
                key: file.Key,
            }));
    } catch (error) {
        console.error("Error listing files:", error);
        throw error;
    }
};

exports.updateFileS3 = async (filePath, fileName) => {
    try {
        const jsonSourceData = await this.getFileFromS3(filePath);
        const uploadParams = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `usedFiles/${fileName}.json`,
            Body: JSON.stringify(jsonSourceData),
        };

        const data = await s3.putObject(uploadParams);
        console.log(`Archivo actualizado con éxito`);
        return data.Location;
    } catch (error) {
        console.error(`Error actualizando archivo`);
        throw error;
    }
};

exports.getFileFromS3 = async (filePath) => {
    try {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: filePath,
        };

        const data = await s3.getObject(params);
        const jsonData = await streamToString(data.Body);
        return JSON.parse(jsonData);
    } catch (error) {
        console.error(`Error al obtener el archivo: ${error.message}`);
        throw error;
    }
};

exports.deleteFileFromS3 = async (filePath) => {
    try {
        const [folder, versionedFile] = filePath.split('/').slice(-2);
        const baseFileName = versionedFile.split('_')[0];
        const folderPrefix = `backupFiles/${folder}`;

        const deleteParams = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: filePath,
        };
        await s3.deleteObject(deleteParams);
        console.log(`Archivo eliminado exitosamente: ${filePath}`);

        const listParams = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Prefix: folderPrefix,
        };
        const listedObjects = await s3.listObjectsV2(listParams);

        console.log(listedObjects);

        const fixedFilePath = `usedFiles/${baseFileName}.json`;

        if (!listedObjects.Contents || listedObjects.Contents.length === 0) {
            const deleteFixedFileParams = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: fixedFilePath,
            };
            await s3.deleteObject(deleteFixedFileParams);
            console.log(`Archivo fijo eliminado: ${fixedFilePath}`);
        } else {
            const files = listedObjects.Contents.map((file) => file.Key);
            const relatedFiles = files.filter((file) =>
                file.startsWith(`${folderPrefix}/${baseFileName}_V`)
            );

            const sortedVersions = relatedFiles
                .map((file) => ({
                    key: file,
                    version: parseInt(file.match(/_V(\d+)_/)[1], 10),
                }))
                .sort((a, b) => b.version - a.version);

            const versionToRestore = sortedVersions[0];
            console.log(sortedVersions);
            console.log(versionToRestore);

            const copyParams = {
                Bucket: process.env.AWS_BUCKET_NAME,
                CopySource: `${process.env.AWS_BUCKET_NAME}/${encodeURIComponent(versionToRestore.key)}`,
                Key: fixedFilePath,
            };

            await s3.copyObject(copyParams);
            console.log(`Archivo fijo restaurado con datos de: ${versionToRestore.key}`);
        }

        return { message: 'Proceso completado exitosamente' };
    } catch (error) {
        console.error(`Error al procesar la eliminación: ${error.message}`);
        throw error;
    }
};


const streamToString = (stream) => {
    return new Promise((resolve, reject) => {
        const chunks = [];
        stream.on("data", (chunk) => chunks.push(chunk));
        stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
        stream.on("error", reject);
    });
};

exports.getMergedDataInS3Folder = async (folderName) => {
    try {
        const files = await exports.listFilesInS3Folder(folderName);
        let mergedData = [];

        for (const file of files) {
            const fileName = file.key;
            const jsonData = await exports.getFileFromS3(fileName);
            
            mergedData = mergedData.concat(jsonData);
        }

        return mergedData;
    } catch (error) {
        console.error("Error merging JSON files:", error);
        throw error;
    }
};