var removeElements = function(head, val) {
  var tmpHead = {
    val  : null,
    next : head
  };
  var iterator = tmpHead;

  while (iterator && iterator.next) {
    if (iterator.next.val === val)
      iterator.next = iterator.next.next;
    else
      iterator = iterator.next;
  }

  return tmpHead.next;
};

console.log(removeElements({
  val  : 2,
  next : {
    val  : 1,
    next : null
  }
}, 2));