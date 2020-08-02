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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res=[];
    let level=0;
    const LT=(root,level)=>{
        if(!root) return;
        if(res[level]){
            res[level].push(root.val)
        }
        else{
            res[level]=[root.val]
        }
        LT(root.left,level+1)
        LT(root.right,level+1)
    }
    LT(root,0);
    return res;
};
