const http = require('http')
const fs = require('fs')


let server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    const stream = fs.createReadStream('index.html')
    stream.pipe(res)
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
    console.log('Server link: http://' + HOST +':'+ PORT)
})