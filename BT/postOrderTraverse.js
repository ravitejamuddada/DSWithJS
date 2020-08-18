/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
   

    return root?[...postorderTraversal(root.left),...postorderTraversal(root.right),root.val]:[]

};
