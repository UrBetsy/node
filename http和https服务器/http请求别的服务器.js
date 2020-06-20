var option={
    hostname:'www.microsoft.com',
    port:80,
    path:'/',
    method:'GET'
}
var req = http.request(option,function(res){
    // console.log(res)
    // console.log('状态码',res.statusCode)
    // console.log('响应头',JSON.stringify(res.headers))
    // res.setEncoding('utf8')
    // res.on('data',function(chunk){
    //     console.log('响应内容',chunk)
    // })
})
req.on('socket',function(socket){
    console.log(socket)
})
req.end()