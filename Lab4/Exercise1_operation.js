const fs = require("fs")
const readfile = (file) => {
    const src = fs.createReadStream(file)
    src.on('data', function (chunk) {
        process.send(chunk.toString())
    })
        .on('end', function () {
            console.log("End!");
        });
}

process.on("message", file => {
    const f = readfile(file)
})