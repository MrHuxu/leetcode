/**
 * Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
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
var deleteDuplicates = function (head) {
  var saveHead = head;

  while (head && head.next) {
    while (head.next && head.next.val === head.val) {
      head.next = head.next.next;
    }
    head = head.next;
  }

  return saveHead;
};
module.exports = deleteDuplicates;
