function ListNode(val) {
  this.val = val;
  this.next = null;
}

const buildList = nodes => {
  let list = new ListNode(null);
  const head = list;
  for (let node of nodes) {
    list.next = new ListNode(node);
    list = list.next;
  }
  return head.next;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

module.exports = {
  ListNode,
  buildList,
  TreeNode
};