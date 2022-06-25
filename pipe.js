const fs= require('fs');
var readableStream = fs.createReadStream('in.txt');
var writeStream=fs.createWriteStream('out.txt');
readableStream.pipe(writeStream);
