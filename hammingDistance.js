/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.

Input: x = 1, y = 4
Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

var hammingDistance = function(x, y) {
  
  var a1 = [];
  var a2 = [];
  var result = 0;
  
  while(x > 0)
      {
          a1.push(x % 2);
          x = Math.floor(x/2);
      }
  
  
  while(y > 0)
      {
          a2.push(y % 2);
          y = Math.floor(y/2);
      }
  
  
  while(a1.length < a2.length)
      {
         a1.push(0);     
      }
  
  while(a2.length < a1.length)
      {
         a2.push(0);     
      }
  
   for(var i = 0 ;  i<= a1.length-1 ; i++)
       {
           if(a1[i] != a2[i])
               {
                 result =  result +1;  
               }
       }
  
  return result;
};