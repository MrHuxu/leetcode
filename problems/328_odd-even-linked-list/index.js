/**
 * Problem: https://leetcode.com/problems/odd-even-linked-list/description/
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

var oddEvenList = function (head) {
  if (!head || !head.next || !head.next.next) return head;

  if (!head.next.next.next) {
    head.next.next.next = head.next;
    head.next = head.next.next;
    head.next.next.next = null;
    return head;
  }

  var oddList = new ListNode(null);
  var oddHead = oddList;
  var evenList = new ListNode(null);
  var evenHead = evenList;
  var init = 1;
  while (head) {
    if (0 === init % 2) {
      evenList.next = head;
      evenList = evenList.next;
    } else {
      oddList.next = head;
      oddList = oddList.next;
    }
    ++init;
    head = head.next;
  }
  
  evenList.next = null;
  oddList.next = evenHead.next;

  return oddHead.next;
};

module.exports = oddEvenList;
