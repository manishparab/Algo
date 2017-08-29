function find(nums, target)
{
    var low = 0;
    var high = nums.length-1;

    while(high >=  low)
      {
        var mid = Math.floor((high+low)/2);

        if(nums[mid] == target)
          return true;
        
        if(nums[mid] < target)
          {
            low =  mid +1;
          }
          else
            {
              high =  mid-1;
            }
      }

      return false;

}