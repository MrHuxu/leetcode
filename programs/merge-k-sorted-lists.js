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
  var l = new ListNode(), tmp;
  var head = l;
  while (true) {
    if (!lists.length)
      break;
    for (var i = parseInt(lists.length / 2) - 1; i >= 0; --i) {
      if (lists[i] && lists[2 * i + 1] && lists[2 * i + 1].val < lists[i].val) {
        tmp = lists[i];
        lists[i] = lists[2 * i + 1];
        lists[2 * i + 1] = tmp;
      }
      if (lists[i] && lists[2 * (i + 1)] && lists[2 * (i + 1)].val < lists[i].val) {
        tmp = lists[i];
        lists[i] = lists[2 * (i + 1)];
        lists[2 * (i + 1)] = tmp;
      }
    }
    if (lists[0]) {
      l.next = new ListNode(lists[0].val);
      l = l.next;
      lists[0] = lists[0].next;
      if (!lists[0])
        lists.shift();
    } else {
      lists.shift();
    }
  }
  return head.next;
};

console.log(mergeKLists(lists));
console.log(mergeKLists([]));
console.log(mergeKLists([null, null]));
