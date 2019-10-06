const { expect } = require('chai');
const { buildList } = require('../../scripts/problem-utils');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let removeZeroSumSublists = function(head) {
  
};

it('remove-zero-sum-consecutive-nodes-from-linked-list', () => {
  expect(removeZeroSumSublists(buildList([1,2,-3,3,1]))).to.deep.eq([3, 1]);
});