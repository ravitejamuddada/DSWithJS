/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    //--Array to BT--//
    const sortedArrayToBST=nums=>{
    if (nums.length === 1) return new TreeNode(nums[0]);
    if (nums.length === 0) return null;
    
    //create a new TreeNode(center)
    let centerIdx = Math.floor(nums.length/2);    
    let root = new TreeNode(nums[centerIdx]);
    
    //set left node to center of left subtree
    let leftSubtree = nums.slice(0,centerIdx);
    root.left = sortedArrayToBST(leftSubtree);
    
    //set right node to center of right subtree
    let rightSubtree = nums.slice(centerIdx+1,nums.length);
    root.right = sortedArrayToBST(rightSubtree);
      
    return root;
    }
    
    let list=[];
    while(head){
        list.push(head.val);
        head=head.next;
    }
   return  sortedArrayToBST(list);
};
