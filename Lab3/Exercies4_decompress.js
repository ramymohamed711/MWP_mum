const fs = require("fs")
const zlib = require("zlib")
const gzip = zlib.createGzip()

var gunzip = zlib.createGunzip();
var rstream = fs.createReadStream('./ramy.txt.gz');
rstream .pipe(gunzip).pipe(process.stdout);