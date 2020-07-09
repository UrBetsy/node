var index = -1;
function compose() {
    return dispatch(0);
}

function dispatch(i) {
    if (i <= index) return Promise.reject(new Error('next() called multiple times'))
    index = i;
    var fn = middleware[i]
    if (i === middleware.length) fn = next;
    if (!fn) return Promise.resolve('fn is undefined')
    try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
    } catch(err) {
        return Promise.reject(err)
    }
}


function f1(context,next){
    console.log('middleware 1');
    next().then(data=>console.log(data));
    console.log('middleware 1');
    return 'middleware 1 return';
  }
  function f2(context,next){
    console.log('middleware 2');
    next().then(data=>console.log(data));
    console.log('middleware 2');
    return 'middleware 2 return';
  }
  function f3(context,next){
    console.log('middleware 3');
    next().then(data=>console.log(data));
    console.log('middleware 3');
    return 'middleware 3 return';
  }
var middleware=[
  f1,f2,f3
]

var context = {};
var next=function(context,next){
    console.log('middleware 4');
    next().then(data => console.log(data));
    console.log('middleware 4');
    return 'middleware 4 return';
};
compose().then(data => console.log(data));