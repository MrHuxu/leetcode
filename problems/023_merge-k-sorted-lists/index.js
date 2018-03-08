/**
 * Problem: https://leetcode.com/problems/merge-k-sorted-lists/description/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const { ListNode } = require('../../scripts/problem-utils');

const mergeKLists = lists => {
  const merge2Lists = (l1, l2) => {
    if (!l1 && l2) return l2;
    if (l1 && !l2) return l1;
    
    let head = new ListNode(null);
    const result = head;
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        head.next = l1;
        l1 = l1.next;
      } else {
        head.next = l2;
        l2 = l2.next;
      }
      head = head.next;
    }

    let left = l1 || l2;
    while (left) {
      head.next = left;
      head = head.next;
      left = left.next;
    }

    return result.next;
  };

  while (lists.length > 1) {
    const tmp = [];
    for (let i = 0; i < lists.length / 2; ++i) {
      tmp.push(merge2Lists(lists[i * 2], lists[i * 2 + 1]));
    }
    lists = tmp;
  }

  return lists[0] || null;
};

module.exports = mergeKLists;
