/**
 * @param {number[]} nums
 * @return {boolean}
 * [1,2,3,1]
 */
var containsDuplicate = function(nums) {
   
    var dict = {};
    
    for(var i=0; i<= nums.length-1; i++)
        {
            if(dict.hasOwnProperty(nums[i]))
                {
                    return true;
                }
            else
                {
                    dict[nums[i]] =1;
                }
        }
    
    return false;
};