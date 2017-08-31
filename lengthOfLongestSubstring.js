/* Add to dictionary till we dont find duplicate
 once we find duplicte, delete till that duplicate 
i.e deleting till window from bigining
*/
var find =  function(s)
{
  var i = 0;
  var j = 0;
  var dict = {};
  var max = 0;
    while( j <= s.length -1)
      {
          if(!dict.hasOwnProperty(s.charAt(j)))
            {
                dict[s.charAt(j)] =1;
                max = Math.max(max, Object.keys(dict).length);
                j = j+1;  
            }
            else
              {
                delete dict[s.charAt(i)];
                i = i+1;
              }
      }

      return Math.max(max,Object.keys(dict).length);
}


console.log(find("acbbv"));