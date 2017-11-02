var debounce = function (func, threshold, execAsap) {
 
    var timeout;
 
    return function debounced () {
        var obj = this, args = arguments;
        function delayed () {
            if (!execAsap)
                func.apply(obj, args);
            timeout = null; 
        };
 
        if (timeout)
            clearTimeout(timeout);
        else if (execAsap)
            func.apply(obj, args);
 
        timeout = setTimeout(delayed, threshold || 100); 
    };
 
}

//easy version
var debounce = function (func, waitTime) {
    
       var timeout;
    
       return function debounced () {
           var obj = this, args = arguments;
           if (timeout) {
                clearTimeout(timeout);
           }
    
           timeout = setTimeout(function() {
                func.apply(obj, args);
           }, waitTime || 100); 
       };
}



function throttle(callback, waitTime) {
    var wait = false;
    return function() {
        var obj = this;
        var args = arguments;
        if (wait) {
            return;
        }
        
        callback.apply(obj, args);//leading;
        wait = true;
        
        setTimeout(function(){
            callback.apply(obj, args);//trailing;
            wait = false;
        }, waitTime || 500);    
        
    }
}