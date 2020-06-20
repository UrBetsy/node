var http = require('http')
var fs = require('fs')
var server = http.createServer(function(req,res){
    if(req.url !== "/favicon.ico"){
        // var out = fs.createWriteStream('./request.log')
        // out.write('客户端请求所用方法'+req.method+'\r\n')
        // out.end('http版本'+req.httpVersion+'\r\n')
        res.writeHead(200,{
            'Content-Type':'text/plain',
            'Access-Control-Allow-Origin': '*'
        })
        res.write('你好','utf-8')
    }
    res.end()
}).listen(8080,'127.0.0.1')