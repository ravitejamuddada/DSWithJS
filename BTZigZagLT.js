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
var zigzagLevelOrder = function(root) {
    let res=[];
    let level=0;
    const levelOrderTraverse=(root,level)=>{
        if(!root) return;
            if(res[level]){
               res[level].push(root.val); 
            }
            else{
                res[level]=[root.val];
            }
        
      levelOrderTraverse(root.left,level+1)
        levelOrderTraverse(root.right,level+1)
        
    }
    levelOrderTraverse(root,0);
    //Zig-Zag or spiral => odd index positioned array will be reversed
    res=res.map((b,i)=>i%2?b.reverse():b)
    return res;
};
