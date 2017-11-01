//简单条件 只有有个arg, 且string, number, obj, array
var myMemoizeFunc = function (passedFunc) {
    var cache = {};//闭包实现缓存
    return function (x) {
        var str = JSON.stringify(x);
        if (str in cache) return  `${cache[str]} old`; //backtick` + ${var}
        return cache[str] = passedFunc(x);
    };
};

//复杂条件： 多个args
var myMemoizeFunc = function (passedFunc) {
    var cache = {};
    return function() {
        var argsStr = JSON.stringify(arguments);
        if (!(argsStr in cache)) {
            cache[argsStr] = passedFunc.apply(null, arguments);//!!! use apply, this is null
        }
        
        return cache[argsStr];
    };
};

var simpleAdd = function (a, b) {
    console.log("original function called");
    return a + b;
}

var memoAdd = myMemoizeFunc(simpleAdd);
console.log(memoAdd(1, 2));
console.log(memoAdd(1, 2));
console.log(memoAdd(11, 22));
console.log(memoAdd(11, 22));



//更复杂： lru? Null,undefined in array ? Vs string 'null'?  this? fallback function?  circular ref?
