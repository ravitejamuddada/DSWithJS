/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head==null) return;
    let node=new ListNode();
    let length=0;
    node=head;;
    while(node){
        node=node.next;
        length++;
    }
    
    let i=1;
    let sub=new ListNode();
    sub=head;
    let prevToLastNode=new ListNode();
    if(length==1) return null;
    
    while(i<length-n+1){
       
        if(i==length-1){
          prevToLastNode=sub;  
        }
        sub=sub.next
        ++i;
        
    }
    if(sub.next){
    sub.val=sub.next.val
    sub.next=sub.next.next
    }
    else{
       prevToLastNode.next=null;
    }
   
    
    return head
};
