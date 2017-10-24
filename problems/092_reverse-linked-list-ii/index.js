/**
 * Problem: https://leetcode.com/problems/reverse-linked-list-ii/description/
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  var root = {
    value : undefined,
    next  : head
  };
  var front = root, tail = root, tmpHead = root, tmp;
  for (var i = 0; i < m - 1; ++i) {
    tmpHead = tmpHead.next;
  }
  for (var i = 0; i < m; ++i) {
    front = front.next;
  }
  for (var i = 0; i <= n; ++i) {
    tail = tail.next;
  }
  console.log('front: ', front, 'tail: ', tail);

  for (var i = m; i <= n; ++i) {
    tmp = front.next;
    front.next = tail;
    tail = front;
    front = tmp;
  }
  tmpHead.next = tail;

  return root.next;
};
module.exports = reverseBetween;
