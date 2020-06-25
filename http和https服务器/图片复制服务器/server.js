/**
 * 这是一个node项目，能复制video图片，输出b图片
 * 
*/
let http=require("http");
let fs=require("fs");

let port=8080;
//创建一个服务，放入一个监听函数
let server=http.createServer();

server.listen(port,function () {
    //启动成功后
    fs.readFile('./video.png','base64',function(err,data){
        fs.writeFile('./b.png',data.toString(),'base64',function(err){
            if(err){
                console.log('操作失败')
            }else{
                console.log('操作成功')
            }
        })
    })
})