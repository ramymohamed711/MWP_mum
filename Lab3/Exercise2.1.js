var http = require("http")
const fs = require("fs")
var server = http.createServer()
server.on('request', function (req, res) {
  fs.readFile('./img.jpg',(err,data)=>{
      if(err) throw err
      res.end(data)
  })
})
server.listen(8000)