

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 




-------------------------------------------------------

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let isSymmetr=true;
    let res=[];
    function arraysEqual(a1,a2) {
    
    return JSON.stringify(a1)==JSON.stringify(a2);
}
    const lot=(root,l)=>{
        if(!root) {
            //as it should be mirror , we should add null
            if(res[l]){
            res[l].push(null)
        }
        else{
            res[l]=[null]
        }
            return 
        }
        if(res[l]){
            res[l].push(root.val)
        }
        else{
            res[l]=[root.val]
        }
        lot(root.left,l+1)
        lot(root.right,l+1)
    }
    lot(root,0);
    for(let i=1;i<res.length;i++){
        if(!arraysEqual(res[i].slice(0,res[i].length/2),res[i].slice(res[i].length/2).reverse())){
            isSymmetr=false;
            break;
        }
    }
    return isSymmetr;
    
};
