/**
 * Problem: https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 */

const { ListNode } = require('../../scripts/problem-utils');

const reverseNodesInKGroup = (list, k) => {
  const reverse = (start, end) => {
    let tail = null;
    let head = new ListNode();
    while (start !== end) {
      let tmp = start;
      start = start.next;

      tmp.next = head.next;
      head.next = tmp;
      if (!tail) tail = tmp;
    }
    start.next = head.next;
    head.next = start;
    if (!tail) tail = start;
    return [head, tail];
  };

  let root = list, i = 0;
  let start, end;
  const result = new ListNode();
  let resultTail = result;
  while (root) {
    if (0 === i % k) start = root;
    if (0 === (i + 1) % k) end = root;
    i++;
    root = root.next;

    if (start && end) {
      const [head, tail] = reverse(start, end);
      resultTail.next = head.next;
      resultTail = tail;
      start = end = null;
    }
  }
  resultTail.next = start;

  return result.next || null;
};

module.exports = reverseNodesInKGroup;
