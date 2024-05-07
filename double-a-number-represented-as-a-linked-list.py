from typing import Optional, Tuple


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def helper(node: Optional[ListNode]) -> Tuple[int, Optional[ListNode]]:
            if node is None:
                return 0, None
            carry, next = helper(node.next)
            val = (node.val * 2 + carry) % 10
            carry = (node.val * 2 + carry) // 10
            return carry, ListNode(val, next)

        carry, node = helper(head)
        return node if carry == 0 else ListNode(1, node)


ret = Solution().doubleIt(ListNode(9, ListNode(9, ListNode(9))))
print(ret.val)
print(ret.next.val)
print(ret.next.next.val)
print(ret.next.next.next.val)
print(ret.next.next.next.next)
