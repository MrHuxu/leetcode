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
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var node = new ListNode(1);
var n2 = new ListNode(0);
n2.next = new ListNode(0);
var lists = [n2, node];

var mergeKLists = function(lists) {
  var l = new ListNode();
  var head = l, min, idx;
  while (true) {
    min = idx = null;
    for (var i = 0, len = lists.length; i < len; i++) {
      if (lists[i]) {
        if (idx !== null) {
          if (lists[i].val < min) {
            min = lists[i].val;
            idx = i;
          }
        } else {
          min = lists[i].val;
          idx = i;
        }
      }
    }
    if (idx !== null) {
      l.next = new ListNode(min);
      while (lists[idx].next && lists[idx].val === lists[idx].next.val) {
        lists[idx] = lists[idx].next;
        l.next = new ListNode(min);
        l = l.next;
      }
      lists[idx] = lists[idx].next;
      l.next = new ListNode(min);
      l = l.next;
    } else {
      break;
    }
  }
  return head.next;
};

console.log(mergeKLists(lists));
