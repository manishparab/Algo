// p and q are also tree nodes.

// check the value if its greater than p & q.
// check the value if its less than p & q.
// return root node 
var lowestCommonAncestor = function(root, p, q) {
  
      if(root == null){
          return null;
      }  
      if(root.val  > p.val && root.val > q.val)
          {  
              root = lowestCommonAncestor(root.left, p,q);
          }
     else if(root.val < p.val && root.val < q.val)
          {
              root =lowestCommonAncestor(root.right, p,q);
          }
      return root;    
  };


