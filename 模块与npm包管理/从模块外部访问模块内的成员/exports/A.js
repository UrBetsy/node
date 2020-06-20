var Msg = 'hello'
var Fn = function() {
    return 'I am fn'
}
function Fn2() {
    return 'I am fn2'
}
//module.exports或者exports都可以
module.exports.msg = Msg
exports.fn = Fn
exports.fn2 = Fn2