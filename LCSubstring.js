function LCSubstring(str1, str2)
{
    var matrix = [];
    var max = 0;

     for(var i = 0; i<= str1.length ; i++)
      {
          matrix.push(new Array(str2.length).fill(0));
      }

      var s1 = str1.split('');
      var s2 = str2.split('');

      for(var i = 1 ; i <= s1.length ; i++)
        {
            for(var j = 1; j<= s2.length ; j++)
              {
                  if(s1[i-1] == s2[j-1])
                    {
                        matrix[i][j] = matrix[i-1][j-1] + 1;
                    }

                     if(matrix[i][j] > max)
                      {
                          max = matrix[i][j];
                      }
              }
        }
      
        return max;

}

console.log(LCSubstring("manish" ,"ni"));