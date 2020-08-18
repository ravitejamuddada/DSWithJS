/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//BFS
var levelOrder = function(root) {
    let res=[];
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
    return res;
};
