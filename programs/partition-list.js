function ListNode(val) {
  this.val = val;
  this.next = null;
}

var partition = function(head, x) {
  var divide = new ListNode(0);
  divide.next = head;
  var h = divide;

  var cursor = divide;
  while (cursor.next) {
    if (cursor.next.val < x) {
      var tmp1 = cursor;
      var tmp2 = divide.next;
      console.log(tmp1);
      console.log(tmp2);
      while (cursor.next && cursor.next.val < x) cursor = cursor.next;
      console.log(cursor);
      console.log('divide', divide);
      divide.next = tmp1.next;
      tmp1.next = cursor.next;
      cursor.next = tmp2;
      cursor = tmp1;
    } else {
      cursor = cursor.next;
    }
  }

  console.log(h);
  return h.next;
};

var n = new ListNode(1);
console.log(partition(n, 2));

