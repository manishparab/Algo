// Form a dict
// the value which is small length of dict or input.
function distributeCandies(input)
{
   var dict = {};
   for(var i=0; i<= input.length-1 ; i++)
    {
      if(dict.hasOwnProperty(input[i]))
        {
          dict[input[i]] = dict[input[i]] +1;
        }
        else
        {
            dict[input[i]] =1;
        }
    }

    return Math.min(Objects.keys(dict).length , input/2);
}
