/**
 * Problem: https://leetcode.com/problems/add-two-numbers/description/
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

let addTwoNumbers = (l1, l2) => {
  const traverse = (tail, node1, node2, plus) => {
    if (!node1 && !node2 && !plus) return;

    const sum = (node1 ? node1.val : 0) + (node2 ? node2.val : 0) + (plus ? 1 : 0);
    const node = new ListNode(sum % 10);
    tail.next = node;
    traverse(tail.next, node1 && node1.next, node2 && node2.next, sum > 9);
  };
  const head = tail = new ListNode();
  traverse(tail, l1, l2, false);
  return head.next;
};
module.exports = addTwoNumbers;
