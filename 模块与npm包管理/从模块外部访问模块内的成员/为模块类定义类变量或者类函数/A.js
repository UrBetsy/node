var foo = function(name,age){
    _name = name,
    _age = age
}

foo.staticName = ''
foo.staticFunction = function(){
    console.log(foo.staticName) 
}
console.log(module.id) //打印该模块的id /Users/lifan/secondself/nodetest/模块与npm包管理/从模块外部访问模块内的成员/为模块类定义类变量或者类函数/A.js
console.log(module.filename) //打印该模块的name /Users/lifan/secondself/nodetest/模块与npm包管理/从模块外部访问模块内的成员/为模块类定义类变量或者类函数/A.js
console.log(module.loaded) // 该模块是够加载完成  false
setTimeout(()=>{
    console.log(module.loaded) //true
},100)
console.log(module.parent)
// Module {
//     id: '.',
//     exports: {},
//     parent: null,
//     filename: '/Users/lifan/secondself/nodetest/模块与npm包管理/从模块外部访问模块内的成员/为模块类定义类变量或者类函数/B.js',
//     loaded: false,
//     children: 
//      [ Module {
//          id: '/Users/lifan/secondself/nodetest/模块与npm包管理/从模块外部访问模块内的成员/为模块类定义类变量或者类函数/A.js',
//          exports: {},
//          parent: [Circular],
//          filename: '/Users/lifan/secondself/nodetest/模块与npm包管理/从模块外部访问模块内的成员/为模块类定义类变量或者类函数/A.js',
//          loaded: false,
//          children: [],
//          paths: [Object] } ],
//     paths: 
//      [ '/Users/lifan/secondself/nodetest/模块与npm包管理/从模块外部访问模块内的成员/为模块类定义类变量或者类函数/node_modules',
//        '/Users/lifan/secondself/nodetest/模块与npm包管理/从模块外部访问模块内的成员/node_modules',
//        '/Users/lifan/secondself/nodetest/模块与npm包管理/node_modules',
//        '/Users/lifan/secondself/nodetest/node_modules',
//        '/Users/lifan/secondself/node_modules',
//        '/Users/lifan/node_modules',
//        '/Users/node_modules',
//        '/node_modules' ] }
module.exports = foo;
//类只能用module.exports
