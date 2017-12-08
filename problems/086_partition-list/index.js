/**
 * Problem: https://leetcode.com/problems/partition-list/description/
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
 * @param {number} x
 * @return {ListNode}
 */
const { ListNode } = require('../../scripts/problem-utils');

var partition = function(head, x) {
  const lessRoot = new ListNode(null), greaterRoot = new ListNode(null);
  let movLessRoot = lessRoot, movGreaterRoot = greaterRoot;

  while (head) {
    const node = new ListNode(head.val);
    if (head.val < x) {
      movLessRoot.next = node;
      movLessRoot = movLessRoot.next;
    } else {
      movGreaterRoot.next = node;
      movGreaterRoot = movGreaterRoot.next;
    }
    head = head.next;
  }
  movLessRoot.next = greaterRoot.next;
  return lessRoot.next;
};

module.exports = partition;
