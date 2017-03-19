var reverseBetween = function(head, m, n) {
  var root = {
    value : undefined,
    next  : head
  };
  var front = root, tail = root, tmpHead = root, tmp;
  for (var i = 0; i < m - 1; ++i) {
    tmpHead = tmpHead.next;
  }
  for (var i = 0; i < m; ++i) {
    front = front.next;
  }
  for (var i = 0; i <= n; ++i) {
    tail = tail.next;
  }
  console.log('front: ', front, 'tail: ', tail);

  for (var i = m; i <= n; ++i) {
    tmp = front.next;
    front.next = tail;
    tail = front;
    front = tmp;
  }
  tmpHead.next = tail;

  return root.next;
};

console.log(reverseBetween({
  value : 1,
  next  : {
    value : 2,
    next  : {
      value : 3,
      next  : {
        value : 4,
        next  : {
          value : 5,
          next  : null
        }
      }
    }
  }
}, 2, 4));

console.log(reverseBetween({
  value : 3,
  next  : {
    value : 5,
    next  : null
  }
}, 1, 2));