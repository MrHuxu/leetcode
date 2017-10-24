/**
 * Problem: https://leetcode.com/problems/insertion-sort-list/description/
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
const { ListNode } = require('../../scripts/problem-utils');

var insertionSortList = function(head) {
  if (!head || !head.next) return head;
  var result = new ListNode(null);
  while (head) {
    if (null === result.val) {
      result = new ListNode(head.val);
    } else {
      if (head.val <= result.val) {
        var tmp = new ListNode(head.val);
        tmp.next = result;
        result = tmp;
      } else {
        var tmp = result;
        while (result.next && result.next.val < head.val) {
          result = result.next;
        }
        var tmpNext = result.next;
        result.next = new ListNode(head.val);
        result.next.next = tmpNext;
        result = tmp;
      }
    }
    head = head.next;
  }

  return result;
};
module.exports = insertionSortList;
