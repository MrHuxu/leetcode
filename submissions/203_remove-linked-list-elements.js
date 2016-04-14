/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var tmpHead = {
    val: null,
    next: head
  };
  var iterator = tmpHead;

  while (iterator && iterator.next) {
    if (iterator.next.val === val)
      iterator.next = iterator.next.next;
    else
      iterator = iterator.next;
  }

  return tmpHead.next;
};