var sortedArrayToBST = function(nums) {
  if(nums == null)
      return null;
  if(nums.length == 0)
      return null;
  
  return GenerateTree(nums, 0 ,  nums.length-1);
};


// keep finding the mid 
function GenerateTree(nums,start,end)
{

  if(start > end)
      return null;

  var mid = Math.floor ((start +end)/2);
  
  var node = new TreeNode(nums[mid])
  
  node.left = GenerateTree(nums ,start, mid-1);
  node.right = GenerateTree(nums ,mid+1, end);
  
  return node;
}