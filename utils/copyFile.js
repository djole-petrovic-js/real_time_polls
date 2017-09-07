const
  fs = require('fs');

const copyFile = ({ src,dest }) => {
  return new Promise((resolve,reject) => {
    const 
      readStream  = fs.createReadStream(src),
      writeStream = fs.createWriteStream(dest);

    readStream.pipe(writeStream);

    readStream.on('error',(error) => {
      reject(error);
    });

    writeStream.on('error',(error) => {
      reject(error);
    });

    writeStream.on('finish',() => {
      resolve();
    });
  });
}

module.exports = copyFile;