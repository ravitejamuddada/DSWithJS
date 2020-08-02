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
 * @return {boolean}
 */
var isBalanced = function(root, count = 1) {
  if (!root) return true;
  
  const left = root.left ? isBalanced(root.left, count + 1) : count;
  const right = root.right ? isBalanced(root.right, count + 1) : count;
  
  if (left === false || right === false) return false;
  
  return Math.abs(right - left) > 1 ? false : Math.max(right,left);
};
