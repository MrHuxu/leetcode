/**
 * Problem: https://leetcode.com/problems/merge-two-sorted-lists/description/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const { ListNode } = require('../../scripts/problem-utils');

var mergeTwoLists = function (l1, l2) {
  var l = new ListNode(null), node;
  var head = l;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      l.next = new ListNode(l1.val);
      l1 = l1.next;
    } else if (l1.val > l2.val) {
      l.next = new ListNode(l2.val);
      l2 = l2.next;
    } else {
      l.next = new ListNode(l1.val);
      l1 = l1.next;
      l = l.next;
      l.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    l = l.next;
  }
  if (l1) l.next = l1;
  if (l2) l.next = l2;
  return head.next;
};

module.exports = mergeTwoLists;
