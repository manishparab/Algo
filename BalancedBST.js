/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  
  if(root == null)
      return true;
  var left = check(root.left);  
  var right = check(root.right);
  return Math.abs(left-right) <=1 && isBalanced(root.left) && isBalanced(root.right);
};

// hight is max  between left and right hight, try to imagin the last node.
function check(node)
{
 if(node == null)
      return  0;
  
  var left = check(node.left);
  
  var right = check(node.right);
  
  return Math.max(left,right) +1;
}