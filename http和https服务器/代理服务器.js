var http = require('http')
var url = require('url')

var server = http.createServer(function(req,res){
    var url_parts = url.parse(req.url)
    var opt = {
        host: 'www.amazon.cn',
        port: 80,
        path: url_parts.pathname,
        header: req.headers
    }
    var creq = http.get(opt,function(cres){
        res.writeHead(cres.statusCode, cres.headers)
        cres.pipe(res)
    })
    req.pipe(creq)
})
server.listen(1334,'127.0.0.1')