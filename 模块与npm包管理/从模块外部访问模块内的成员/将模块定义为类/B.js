var  foo = require('./A.js')
var myFoo = new foo('Tom',40)
console.log('获取修改前的私有变量')
console.log(myFoo.getName()) //Tom
console.log(myFoo.getAge())  //40

console.log('修改私有变量值')
myFoo.setName('lifan')
myFoo.setAge(26)

console.log('获取修改后的私有变量')
console.log(myFoo.getName())  // lifan
console.log(myFoo.getAge())    //26

console.log('获取修改前的公有变量')
console.log(myFoo.name)  //''
console.log(myFoo.age)    //0

console.log('修改公有变量值')
myFoo.name = 'jj'  
myFoo.age = 50      

console.log('获取修改后的公有变量值')
console.log(myFoo.name) // jj
console.log(myFoo.age)   //50