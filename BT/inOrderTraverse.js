/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    return root?[...inorderTraversal(root.left),root.val,...inorderTraversal(root.right)]:[]
};
