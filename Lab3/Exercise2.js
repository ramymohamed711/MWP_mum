var http = require("http")
const fs = require("fs")
var server = http.createServer()
server.on('request', function (req, res) {
    const src = fs.ReadStream('./img.jpg')
    src.pipe(res)
})
server.listen(4000)