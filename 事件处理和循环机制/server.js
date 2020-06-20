var http = require('http')
var server = http.createServer();
var events = require('events')
/*执行也是顺序的，能监听到后面的事件 */
/*一般情况下针对同一个事件，最多可以绑定10个事件处理函数，可以通过 setMaxListener设置*/
// server.setMaxListeners(20)
// server.once('request',function(req,res) {
//     if(req.url !== '/favicon.ico') {
//         console.log('收到客户端请求')
//     }
// })
// server.once('request',function(req,res) {
//     if(req.url !== '/favicon.ico') {
//         console.log('收到客户端请求')
//     }
// })
// server.once('request',function(req,res) {
//     if(req.url !== '/favicon.ico') {
//         console.log('收到客户端请求')
//     }
// })
// server.once('request',function(req,res) {
//     if(req.url !== '/favicon.ico') {
//         console.log('收到客户端请求')
//     }
// })
// server.once('request',function(req,res) {
//     if(req.url !== '/favicon.ico') {
//         console.log('收到客户端请求')
//     }
// })
// server.once('request',function(req,res) {
//     if(req.url !== '/favicon.ico') {
//         console.log('收到客户端请求')
//     }
// })
// server.once('request',function(req,res) {
//     if(req.url !== '/favicon.ico') {
//         console.log('收到客户端请求')
//     }
// })
// server.once('request',function(req,res) {
//     if(req.url !== '/favicon.ico') {
//         console.log('收到客户端请求')
//     }
// })
// server.once('request',function(req,res) {
//     if(req.url !== '/favicon.ico') {
//         console.log('收到客户端请求')
//     }
// })
// server.once('request',function(req,res) {
//     if(req.url !== '/favicon.ico') {
//         console.log('收到客户端请求')
//     }
// })
// server.once('request',function(req,res) {
//     if(req.url !== '/favicon.ico') {
//         console.log('收到客户端请求')
//     }
// })

/*在events模块中，为EventEmitter类定义了两个事件 */
server.on('newListener',function(e,f){
    console.log('对'+e+'事件添加'+f+'处理函数')
})
server.on('removeListener',function(e,f){
    console.log('对'+e+'事件撤销'+f+'处理函数')
})

/*once方法让时间处理函数执行一次*/
// server.once('request',function(req,res) {
//     if(req.url !== '/favicon.ico') {
//         console.log('收到客户端请求')
//     }
// })

/*on方法可以重复监听事件*/
// server.once('request',function(req,res) {
//     if(req.url !== '/favicon.ico') {
//         console.log('收到客户端请求')
//     }
// })

/*利用removeListener取消某事件*/
// server.removeListener('request',function(req,res){
// })

/*emit手动触发某个对象的一个事件（on写在上面emit在下面，换了顺序不执行）*/
server.on('customEvent',function(arg1,arg2,arg3){
    console.log('自定义事件被触发',arg1,arg2,arg3)
});
server.emit('customEvent','参数1','参数2','参数3');

/*利用EventEmitter类listenerCount方法，可以获取某个对象制定事件处理函数的数量*/
console.log(events.EventEmitter.listenerCount(server,'request'))

server.listen(1337,'127.0.0.1')

/*nodejs的事件循环机制 */
// 采用了非阻塞型的I/O机制，所有要求应用程序所进行的处理，如http请求，数据库查询，文件的输入/输出等，都不会在处理结束之前阻碍其他处理的进行。
// 也就是说这些处理都是独立的，处理结束时候会触发一个回调事件，也就是说nodejs中我们编写的各种I/O事件的回调函数中处理