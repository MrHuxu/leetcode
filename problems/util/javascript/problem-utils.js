const ListNode = function(val) {
  this.val = val;
  this.next = null;
};

const buildList = nodes => {
  let list = new ListNode(null);
  const head = list;
  for (let node of nodes) {
    list.next = new ListNode(node);
    list = list.next;
  }
  return head.next;
};

const printList = root => {
  const vals = [];
  while (root.next) {
    vals.push(root.val);
    root = root.next;
  }
  console.log(vals);
};

const TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

const buildTree = nodes => {
  const build = i => {
    if (nodes[i] !== null && nodes[i] !== undefined) {
      const node = new TreeNode(nodes[i]);
      node.left = build(i * 2 + 1);
      node.right = build((i + 1) * 2);
      return node;
    } else {
      return null;
    }
  };
  return build(0);
};

module.exports = {
  ListNode,
  buildList,
  printList,
  TreeNode,
  buildTree
};