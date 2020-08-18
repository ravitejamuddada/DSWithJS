

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its max depth = 3.


-----------------------------------------------------







/**

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
  
  
    let ans=0
    const maxDep=(root,depth)=>{
          if(!root) return
        if(!root.left && !root.right) //leaf node ? update the answer
            ans=Math.max(ans,depth);
        maxDep(root.left,depth+1)
        maxDep(root.right,depth+1)
    }
    maxDep(root,1)
    return ans;
    
};
