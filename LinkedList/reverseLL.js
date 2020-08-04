/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return null;
    let prev=ListNode();
    let last=ListNode();
    prev=null;
    while(head.next){
        last=head;
        head=head.next;
        last.next=prev;
        prev=last;
    }
    head.next=prev;
    return head;
};
