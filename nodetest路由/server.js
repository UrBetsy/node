//http服务器
var http = require("http"); //require nodejs自带的http模块
var url = require("url")
//createServer方法回返回一个对象，该对象有一个listen方法，该方法数值参数是http服务监听的端口号

function start(route,handle){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("request for" + pathname + 'received');

        var content = route(handle,pathname)

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(8888);
}

exports.start = start;
