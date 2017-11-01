var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    let dict = {};
    let used_t = new Set();// Set() is faster than array
    for (var i = 0; i < s.length; i++) {
        var curt_s = s.charAt(i);
        var curt_t = t.charAt(i);
        if (!(curt_s in dict)) {
            if (used_t.has(curt_t)) {
                return false;
            }
            dict[curt_s] = curt_t;
            used_t.add(curt_t);
        }
            
        if (dict[curt_s] !== curt_t) {
            return false;
        }
    }
    
    return true;
};