function isPalindrome(str) { 
    return str === str.split('').reverse().join('');
}

// function isPalin(str) {
//     return str === str.split('').reverse().join('');
// }


function isPalin(str) {
    if (str.length === 0 || str.length === 1) {
        return true;
    }
    
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str.charAt(left++) !== str.charAt(right--) ) {
            return false;
        }
    }
    
    return true;
}


console.log("123321 " + isPalin("123321"));
console.log("123 " + isPalin("123"));
console.log("1221 " + isPalin("1221"));
console.log("1 " + isPalin("1"));
console.log("empty "+isPalin(""));