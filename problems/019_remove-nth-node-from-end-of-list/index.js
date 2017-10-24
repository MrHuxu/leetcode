/**
 * Problem: https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var total = 1, tmp = head, node;
  while (tmp = tmp.next) ++total;
  tmp = head;
  if (total === n) {
    head = head.next;
  } else {
    pos = total - n - 1;
    for (var i = 0; i < total; ++i) {
      if (i === pos) {
        tmp.next = tmp.next.next;
        break;
      } else {
        tmp = tmp.next;
      }
    }
  }
  return head;
};

module.exports = removeNthFromEnd;
