/*
Given an array A[], write a function that segregates even and odd numbers. 
The functions should put all even numbers first, and then odd numbers.

Example

Input  = {12, 34, 45, 9, 8, 90, 3}
Output = {12, 34, 8, 90, 45, 9, 3} 

In the output, order of numbers can be changed, i.e., 
in the above example 34 can come before 12 and 3 can come before 9.
*/

function reArrange(nums)
{
   var j = 0;
   var copynum = [];
   for(var i =0 ; i<= nums.length-1; i++)
    {
        if(nums[i] % 2 ==0)
          {
             nums[j] = nums[i];
             j = j+1; 
          }
          else
            {
              copynum.push(nums[i]);
            }
    }

    3
    var len = copynum.length;
    if(len > 0)
    {
    for(var i =0  ; i<= len-1; i++)
      {
        nums[nums.length-copynum.length + i] = copynum[i];
      }
    }

    return nums;
}

//reArrange([12, 34, 45, 9, 8, 90, 3]);