var reorderList = function(head) {
  var first = head;

  if (head && head.next) {
    while (head.next) {
      head.next.pre = head;
      head = head.next;
    }
    var last = head;
    while (true) {
      if (last !== first && last !== first.next) {
        last.next = first.next;
        first.next = last;
        first = last.next;
        last = last.pre;
      } else {
        last.next = null;
        break;
      }
    }
  }
};

var head = null;
console.log(reorderList(head));

head = {
  val  : 1,
  next : null
};
console.log(reorderList(head));

head = {
  val  : 1,
  next : {
    val  : 2,
    next : null
  }
};
console.log(reorderList(head));

head = {
  val  : 1,
  next : {
    val  : 2,
    next : {
      val  : 3,
      next : {
        val  : 4,
        next : null
      }
    }
  }
};
console.log(reorderList(head).next.next);

head = {
  val  : 1,
  next : {
    val  : 2,
    next : {
      val  : 3,
      next : {
        val  : 4,
        next : {
          val  : 5,
          next : null
        }
      }
    }
  }
};
console.log(reorderList(head).next.next);