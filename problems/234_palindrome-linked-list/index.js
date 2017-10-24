/**
 * Problem: https://leetcode.com/problems/palindrome-linked-list/description/
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) return true;
  var front = head;
  while (head && head.next) {
    head.next.pre = head;
    head = head.next;
  }
  var tail = head;
  
  var flag = true;
  while (front !== tail && front.next !== tail) {
    if (front.val === tail.val) {
      front = front.next;
      tail = tail.pre;
    } else {
      flag = false;
      break;
    }
  }
  
  return flag && front.val === tail.val;
};
module.exports = isPalindrome;
