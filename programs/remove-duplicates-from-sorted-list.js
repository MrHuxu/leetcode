'use strict';

var deleteDuplicates = function (head) {
  var saveHead = head;

  while (head && head.next) {
    while (head.next && head.next.val === head.val) {
      head.next = head.next.next;
    }
    head = head.next;
  }

  return saveHead;
};