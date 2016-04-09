function ListNode(val) {
  this.val = val;
  this.next = null;
}

var insertionSortList = function(head) {
  if (!head || !head.next) return head;
  var result = new ListNode(null);
  while (head) {
    if (result.val === null) {
      result = new ListNode(head.val);
    } else {
      if (head.val <= result.val) {
        var tmp = new ListNode(head.val);
        tmp.next = result;
        result = tmp;
      } else {
        var tmp = result;
        while (result.next && result.next.val < head.val) {
          result = result.next;
        }
        var tmpNext = result.next;
        result.next = new ListNode(head.val);
        result.next.next = tmpNext;
        result = tmp;
      }
    }
    head = head.next;
  }

  return result;
};

var root = {
  val: 1,
  next: {
    val: 1,
    next: null
  }
};
console.log(insertionSortList(root));

var root = {
  val: 2,
  next: {
    val: 1,
    next: {
      val: 4,
      next: {
        val: 3,
        next: null
      }
    }
  }
};

console.log(insertionSortList(root));