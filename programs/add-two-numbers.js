function ListNode(val) {
  this.val = val;
  this.next = null;
};

l1 = new ListNode(2);
l12 = new ListNode(4);
l13 = new ListNode(3);
l1.next = l12;
l12.next = l13;

l2 = new ListNode(5);
l22 = new ListNode(6);
l23 = new ListNode(4);
l2.next = l22;
l22.next = l23;

var addTwoNumbers = function (l1, l2) {
  var arr1 = [], arr2 = [];
  while (l1.next) {
    arr1.push(l1.val);
    l1 = l1.next;
  }
  while (l2.next) {
    arr2.push(l2.val);
    l2 = l2.next;
  }
  arr1.push(l1.val);
  arr2.push(l2.val);
  var num1 = parseInt(arr1.reverse().join(''));
  var num2 = parseInt(arr2.reverse().join(''));
  var sum = num1 + num2;
  var ln = new ListNode(undefined), current = ln;
  while (sum >= 10) {
    current.val = sum % 10;
    current.next = new ListNode(undefined);
    current = current.next;
    sum = parseInt(sum / 10);
  }
  current.val = sum;
  return ln;
};

console.log(addTwoNumbers(l1, l2));
