/**
 * Problem: https://leetcode.com/problems/reverse-linked-list/description/
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  var result = null;
  while (head) {
    var tmp = new ListNode(head.val);
    tmp.next = result;
    result = tmp;
    head = head.next;
  }
  return result;
};
module.exports = reverseList;
