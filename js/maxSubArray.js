var maxSubArray = function(nums) {
    var sum = 0;
    var minPresum = 0;
    var maxSum = -Infinity;
    
    for(var i = 0; i < nums.length; i++){
        sum += nums[i];
        maxSum = Math.max(maxSum, sum - minPresum);
        minPresum = Math.min(minPresum, sum);
    }
    
    return maxSum;
};