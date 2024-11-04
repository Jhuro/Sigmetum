const { S3Client, DeleteObjectsCommand, GetObjectCommand, ListObjectsV2Command, HeadObjectCommand, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const fs = require('fs');

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESSKEYID,
        secretAccessKey: process.env.AWS_SECRETACCESSKEY
    }
});

exports.uploadFileToAws = async (fileName, filePath) => {
    try {
      const uploadParams = {
        Bucket: process.env.AWS.BUCKET_NAME,
        Key: fileName,
        Body: fs.createReadStream(filePath), 
      };
  
        await s3Client.send(new PutObjectCommand(uploadParams)).then((data)=>{
        if (fs.existsSync(filePath)) {
            fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
            } else {
                console.log('File deleted successfully.');
            }
            });
        }
      });
  
    } catch (err) {
      console.error('Error ', err);
      return 'error';
    }
};

exports.getFileUrlFromAws = async (fileName, expireTime = null) => {
    try {
        const check = await this.isFileAvailableInAwsBucket(fileName); 

        if (check) {
            const command = new GetObjectCommand({
                Bucket: process.env.AWS.BUCKET_NAME,
                Key: fileName,
            });

            if (expireTime != null) {
                const url = await getSignedUrl(s3Client, command, { expiresIn: expireTime });
                return url;
            } else {
                const url = await getSignedUrl(s3Client, command);
                return url;
            }
        } else {
            return "error";
        }
    } catch (err) {
        console.log("error ::", err);
        return "error";
    }
};

exports.isFileAvailableInAwsBucket = async (fileName) => {
    try {
        await s3Client.send(new HeadObjectCommand({
            Bucket: process.env.AWS.BUCKET_NAME,
            Key: fileName,
        }));
  
        return true;
    } catch (err) {
        if (err.name === 'NotFound') {
            return false;
        } else {
            return false;
        }
    }
};

exports.deleteFileFromAws = async (fileName) => {
    try {
      const uploadParams = {
        Bucket: process.env.AWS.BUCKET_NAME,
        Key: fileName,
      };
        await s3Client.send(new DeleteObjectCommand(uploadParams)).then((data)=>{
      });
  
    } catch (err) {
      console.error('Error ', err);
      return  'error';
    }
};