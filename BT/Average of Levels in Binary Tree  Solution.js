Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.


--------------------------------
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let res=[];
    const avg=[]
  const lot=(root,l)=>{
        if(!root) return
        if(res[l]){
            res[l].push(root.val);
        }
        else{
            res[l]=[root.val];
        }
        lot(root.left,l+1);
        lot(root.right,l+1);
    }
    lot(root,0);
   
     res.forEach((e,i)=>{avg[i]=(e.reduce((a,c)=>a+c,0))/e.length});
    return avg
};

