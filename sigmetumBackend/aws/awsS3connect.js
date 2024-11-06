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

exports.getFileFromS3 = async (fileName, folderName) => {
    try {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: folderName + "/" + fileName,
        };

        const data = await s3.getObject(params);
        const jsonData = await streamToString(data.Body);
        return JSON.parse(jsonData);
    } catch (error) {
        console.error(`Error al obtener el archivo: ${error.message}`);
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