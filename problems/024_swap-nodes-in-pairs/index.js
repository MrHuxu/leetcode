/**
 * Problem: https://leetcode.com/problems/swap-nodes-in-pairs/description/
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
var swapPairs = function(head) {
  var l, tmp, last;
  if (head && head.next) {
    while (head) {
      if (!l) {
        l = head.next;
      }
      if (head.next) {
        if (last)
          last.next = head.next;
        tmp = head.next.next;
        head.next.next = head;
        head.next = tmp;
        last = head;
        head = head.next;
      } else {
        head = head.next;
      }
    }
  } else {
    l = head;
  }
  return l;
};

module.exports = swapPairs;
