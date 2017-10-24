/**
 * Problem: https://leetcode.com/problems/reorder-list/description/
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  var first = head;

  if (head && head.next) {
    while (head.next) {
      head.next.pre = head;
      head = head.next;
    }
    var last = head;
    while (true) {
      if (last !== first && last !== first.next) {
        last.next = first.next;
        first.next = last;
        first = last.next;
        last = last.pre;
      } else {
        last.next = null;
        break;
      }
    }
  }
};
module.exports = reorderList;
