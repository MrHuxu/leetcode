/**
 * Problem: https://leetcode.com/problems/lru-cache/description/
 */

const LRUNode = function(key, value) {
  this.key = key;
  this.value = value;
  this.pre = this.next = null;
};

const LRUCache = function(n) {
  this.cap = n;
  this.data = new Map();
  this.head = new LRUNode(null);
  this.tail = new LRUNode(null);
  this.head.next = this.tail;
  this.tail.pre = this.head;
};

LRUCache.prototype.put = function(key, value) {
  const node = new LRUNode(key, value);

  if (this.data.has(key)) {
    const lastNode = this.data.get(key);
    lastNode.pre.next = lastNode.next;
    lastNode.next.pre = lastNode.pre;
    node.pre = this.head;
    node.next = this.head.next;
    this.head.next.pre = node;
    this.head.next = node;
    this.data.set(key, node);
  } else {
    node.pre = this.head;
    node.next = this.head.next;
    this.head.next.pre = node;
    this.head.next = node;
    this.data.set(key, node);
    if (this.data.size > this.cap) {
      this.data.delete(this.tail.pre.key);
      this.tail.pre = this.tail.pre.pre;
      this.tail.pre.next = this.tail;
    }
  }
};

LRUCache.prototype.get = function(key) {
  if (!this.data.has(key)) return -1;

  const node = this.data.get(key);
  node.pre.next = node.next;
  node.next.pre = node.pre;
  node.pre = this.head;
  node.next = this.head.next;
  this.head.next.pre = node;
  this.head.next = node;
  return node.value;
};

module.exports = LRUCache;