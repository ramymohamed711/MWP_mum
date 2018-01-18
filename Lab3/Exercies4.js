const fs = require("fs")
const zlib = require("zlib")
const gzip = zlib.createGzip()

var readable = fs.createReadStream('./ramy.txt');
var compressed = fs.createWriteStream('./ramy.txt.gz');
readable.pipe(gzip).pipe(compressed)
