/**
 * Problem: https://leetcode.com/problems/intersection-of-two-linked-lists/description/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  var lenA = 0, lenB = 0, cacheA = headA, cacheB = headB;
  while (headA) {
    ++lenA;
    headA = headA.next;
  }
  while (headB) {
    ++lenB;
    headB = headB.next;
  }

  if (lenA > lenB) {
    var tmp = lenA - lenB;
    while (tmp--) cacheA = cacheA.next;
  } else {
    var tmp = lenB - lenA;
    while (tmp--) cacheB = cacheB.next;
  }

  var result = null;
  while (cacheA && cacheB) {
    if (cacheA === cacheB) {
      result = cacheA;
      break;
    }
    cacheA = cacheA.next;
    cacheB = cacheB.next;
  }

  return result;
};
module.exports = getIntersectionNode;
