function reverse(str){
    var rtnStr = '';
    for(var i = str.length-1; i>=0;i--){
      rtnStr +=str[i];
    }
    return rtnStr;
  }

// /You know concatenation performed well in modern browsers but becomes slow in older browsers like IE8. Is there any different way, you can reverse a string?
  function reverse(str){
    var rtnStr = [];
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    for(var i = str.length-1; i>=0;i--){
      rtnStr.push(str[i]);
    }
    return rtnStr.join('');
  }


//Can you make this better?
  function reverse(str) {
    str = str.split('');
    var len = str.length,
        halfIndex = Math.floor(len / 2) - 1,
        revStr;
    for (var i = 0; i <= halfIndex; i++) {
      revStr = str[len - i - 1];
      str[len - i - 1] = str[i];
      str[i] = revStr;
    }
    return str.join('');
  }
    
  
// /That works, but can u do it in a recursive way?
  function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}
  

//Can you use any build in method to make it little cleaner?
function reverse(str){
    if(!str || str.length <2) return str;
    
    return str.split('').reverse().join('');
  }


  //Can you make reverse function as string extension?
  String.prototype.reverse = function (){
    if(!this || this.length <2) return this;
    
    return this.split('').reverse().join('');
  }