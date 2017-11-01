var climbStairs = function(n) {
    var n0 = 1, n1 = 1;
    for (var i = 2; i <= n; i++) {
        var ways = n0 + n1;
        n0 = n1; 
        n1 = ways;
    }

    return n1; 
};