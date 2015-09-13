var ListNode = function (val) {
  this.val = val;
  this.next = null;
};

var l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
l.next.next.next = new ListNode(4);
l.next.next.next.next = new ListNode(5);

var rotateRight = function (head, k) {
  var nodes = [];
  var tmp = head;
  while (head) {
    nodes.push(head);
    head = head.next;
  }
  var l = nodes.length;
  k = k % l;
  if (k) {
    nodes[l - 1].next = nodes[0];
    nodes[l - k - 1].next = null;
    tmp = nodes[l - k];
  }
  return tmp;
};

console.log(rotateRight(l, 5));
