function lcs(str1, str2)
{
    var matrix = [];
    /*  1 2 3
        a b c
   1  a   
   2  b
   3  c  
    */
  
    for(var  i=0; i<= str1.length ; i++)
      {
          matrix.push(new Array(str2.length).fill(0));
      }

      var s1 = str1.split('');
      var s2 = str2.split('');
      var max = 0;
      for(i= 1 ; i<= str1.length ; i++)
        {
            for(var j=1 ; j<= str2.length ; j++)
              {
                 if(s1[i-1] == s2[j-1])
                  {
                     matrix[i][j] =  matrix[i-1][j-1] +1; 
                  }
                  else
                  {
                      matrix[i][j] = Math.max(matrix[i-1][j] ,  matrix[j-1][i]);
                  }
                  
                  if(matrix[i][j] > max){
                    max = matrix[i][j];
                  }
              }
        }

      return max;
}


console.log(lcs("manish","mani"));