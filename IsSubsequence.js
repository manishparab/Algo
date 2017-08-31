//indexs and indext
//ab   acb
function check(s, t)
{
   var indexs = 0;
   var indext = 0;

   while(indext < t.length())
    {
       if(s.charAt(index) == t.charAt(indext))
        {
            indexs = indexs +1;
            if(indexs == s.length-1)
              return true;
        }
        indext = indext +1;        
       
    }

    return false;
}