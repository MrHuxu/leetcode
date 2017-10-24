/**
 * Problem: https://leetcode.com/problems/linked-list-cycle/description/
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false;

  while (head.next) {
    if (head.visited) break;
    head.visited = true;
    head = head.next;
  }
  
  return head.visited ? true : false;
};
module.exports = hasCycle;
