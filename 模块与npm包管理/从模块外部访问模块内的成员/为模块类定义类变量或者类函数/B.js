var  foo = require('./A.js')
var myFoo = new foo('Tom',40)

//获取类变量值
console.log(foo.staticName) //''
foo.staticName = 'staticName'
foo.staticFunction() //staticName