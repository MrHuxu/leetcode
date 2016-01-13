var partition = function(head, x) {
  var h = divide = new ListNode(0);
  h.next = divide.next = head;

  var cursor = divide;
  while (cursor.next) {
    if (cursor.next.val < x) {
      var tmp1 = cursor;
      var tmp2 = divide.next;
      while (cursor.next && cursor.next.val < x) cursor = cursor.next;
      divide.next = tmp1.next;
      tmp1.next = cursor.next;
      cursor.next = tmp2;
      cursor = tmp1;
    } else {
      cursor = cursor.next;
    }
  }

  return h.next;
};

