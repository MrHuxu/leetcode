/**
 * Problem: https://leetcode.com/problems/linked-list-cycle-ii/description/
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
var detectCycle = function(head) {
  if (!head) return head;

  while (head.next) {
    if (head.visited) break;
    head.visited = true;
    head = head.next;
  }
  
  return head.visited ? head : null;
};
module.exports = detectCycle;
