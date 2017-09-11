/* this problem can be solved using dynamic programmig
when characters are same = matrix[i-1][j-1]
when characters are diffrent = min(matrix[i-1][j],matrix[i][j-1] ,matrix[i-1][j-1]) + 1
*/

function editdistance(str1, str2)
{
    var matrix = [];

    for(var i = 0; i<=str1.length +1 ; i++)
      {
          matrix.push(new Array(str2.length +1).fill(0));
      }

    for( i=0; i < matrix[0].length; i++){
        matrix[0][i] = i;
    }

    for( i=0; i < matrix.length; i++){
      matrix[i][0] = i;
  }


      var s1 = str1.split('');
      var s2 = str2.split('');

      for(i=1 ;i <= s1.length ; i++)
        {
          for(j=1;j<= s2.length ; j++)
            {
                if(s1[i-1] == s2[j-1])
                  {
                      matrix[i][j] = matrix[i-1][j-1];      
                  }
                  else
                    {
                      matrix[i][j] = Math.min(matrix[i-1][j],matrix[i][j-1], matrix[i-1][j-1]) +1;
                    }  
            }
        }
        
       return matrix[str1.length][str2.length] == 1
}

editdistance("a","");