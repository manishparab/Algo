

/**
  https://leetcode.com/problems/max-consecutive-ones/description/
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    var counter = 0;
    var max = 0;
    
    for(var i=0; i<= nums.length-1 ; i++)
        {
            if(nums[i] == 0)
                {
                    max = Math.max(max,counter);
                    counter = 0;
                }
            else
                {
                    counter = counter +1;
                }
        }
    
    return Math.max(max,counter);
};