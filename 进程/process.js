// resume()继续
process.stdin.resume()
// 监听到输入内容，就会输出该内容
process.stdin.on('data',function(chunk){
    process.stdout.write('进程接受到数据'+ chunk)
})
// argv属性
process.argv.forEach((item) => {
    console.log('打印',item)
})
// 
console.log(process.memoryUsage())
console.log(process.execPath)