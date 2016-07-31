function ListNode(val) {
  this.val = val;
  this.next = null;
}

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
    if (init % 2 === 0) {
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

var n1 = new ListNode(0);
var n2 = new ListNode(1);
var n3 = new ListNode(2);
var n4 = new ListNode(3);
var n5 = new ListNode(4);
// var n6 = new ListNode(5);
// var n7 = new ListNode(7);
// var n8 = new ListNode(8);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
// n5.next = n6;
// n6.next = n7;
// n7.next = n8;

console.log(oddEvenList(n1));