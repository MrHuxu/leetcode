from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def swapNodes(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummyHead = ListNode(0, head)
        first = dummyHead
        second = dummyHead
        for _ in range(k):
            first = first.next
        kthNode = first
        while first.next:
            first = first.next
            second = second.next
        reverseKthNode = second.next
        kthNode.val, reverseKthNode.val = reverseKthNode.val, kthNode.val
        return dummyHead.next
