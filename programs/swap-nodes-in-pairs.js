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
function ListNode(val) {
  this.val = val;
  this.next = null;
}
head = new ListNode(1);
n2 = new ListNode(2);
n3 = new ListNode(3);
n4 = new ListNode(4);
head.next = n2;
n2.next = n3;
n3.next = n4;

head = head;

var swapPairs = function(head) {
  var l, tmp, last;
  if (head && head.next) {
    while (head) {
      if (!l) {
        l = head.next;
      }
      if (head.next) {
        if (last)
          last.next = head.next;
        tmp = head.next.next;
        head.next.next = head;
        head.next = tmp;
        last = head;
        head = head.next;
      } else {
        head = head.next;
      }
    }
  } else {
    l = head;
  }
  return l;
};

console.log(swapPairs(head));
console.log(swapPairs(null));
