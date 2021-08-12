let fs = require('fs');

let zlib = require('zlib');
let readable = fs.createReadStream(`${__dirname}/greetL.txt`, { encoding: 'utf8',
highWaterMark: 15 * 1024 });

let writable = fs.createWriteStream(`${__dirname}/greetcopy.txt`);
readable.pipe(writable)

//Transformable
let compressed = fs.createWriteStream(`${__dirname}/greet.txt.gz`);
let gzip = zlib.createGzip()
readable.pipe(gzip).pipe(compressed)
