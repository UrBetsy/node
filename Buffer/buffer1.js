/*创建buffer利用长度 */
let buf = new Buffer(10)
console.log(buf) //<Buffer 38 15 84 04 01 00 00 00 80 ab>
//填充缓存区
buf.fill('haha',0,10) //<Buffer 68 61 68 61 68 61 68 61 68 61>
console.log(buf);

/*创建buffer利用内容 */
let buf1 = new Buffer('10')
console.log(buf1)  //<Buffer 31 30>
/*创建buffer利用内容 */
let buf2 = new Buffer('10')
console.log(buf2)  //<Buffer 31 30>

/*toString(encoding,start,end)方法可以将buffer转换成字符串 */
console.log(buf2.toString()) // 10