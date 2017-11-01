var isValid = function(s) {
    var stack = [];
    var map = {'(':')', '[':']', '{':'}'};
    var closeMarks = [')', ']', '}'];//should use set
    
    for(var i = 0; i < s.length; i++) {
        var chr = s[i];
        if(chr in map) {
            stack.push(chr);
        } else if(closeMarks.includes(chr)) {
            var top = stack.pop();
            if(!top || map[top] !== chr) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};


console.log(isValid("{}()[]"));
console.log(isValid(""));
console.log(isValid("{"));