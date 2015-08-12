var removeNthFromEnd = function(head, n) {
  var total = 1, tmp = head, node;
  while (tmp = tmp.next) ++total;
  tmp = head;
  if (total === n) {
    head = head.next;
  } else {
    pos = total - n - 1;
    for (var i = 0; i < total; ++i) {
      if (i === pos) {
        tmp.next = tmp.next.next;
        break;
      } else {
        tmp = tmp.next;
      }
    }
  }
  return head;
};
