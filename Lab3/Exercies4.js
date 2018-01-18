const fs = require("fs")
const zlib = require("zlib")
const gzip = zlib.createGzip()

var readable = fs.createReadStream('./ramy.txt');
var compressed = fs.createWriteStream('./ramy.txt.gz');
readable.pipe(gzip).pipe(compressed)


var gunzip = zlib.createGunzip();
var rstream = fs.createReadStream('./ramy.txt.gz');
rstream .pipe(gunzip).pipe(process.stdout);