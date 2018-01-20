const http = require("http")
const url = require("url")
const querystring = require("querystring")
const {fork} = require("child_process")

var server = http.createServer()
server.on('request', function (req, res) {
    let myurl = url.parse(req.url,true)
    const  childprocess = fork("Exercise1_operation.js");
    childprocess.send(myurl.query.url)
    childprocess.on("message",data=>{console.log(data)})
})
server.listen(4000)