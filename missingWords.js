/*
I am using hackerrank to improve programming
am hackerrank to improve

Sample Output
I
using
programming
Explanation
Missing words are:
1. I  
2. using  
3. programming  
*/
var findmissingwords =  function(s,t)
{
    var result = [];
    var sAry = s.split(' ');
    var tAry = t.split(' ');

    var sIndex = 0;
    var tIndex = 0;

    while(tIndex <= tAry.length-1) {
       if(sAry[sIndex] == tAry[tIndex])
        {
          sIndex = sIndex +1;
        }
        else
        {
          result.push(tAry[tIndex]);
        }

        tIndex = tIndex +1;
    }
      
    return result;
}


//console.log(findmissingwords("am hackerrank to improve" , "I am using hackerrank to improve programming"));