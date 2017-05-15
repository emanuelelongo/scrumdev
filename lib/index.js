import http from 'http'
import Op from './example/op'

http.createServer((req, res) => {
    const op = new Op()
    let r = op.sum(2, 3)
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(r.toString())
}).listen(1337, '127.0.0.1')

console.log('Server running at http://127.0.0.1:1337/')
