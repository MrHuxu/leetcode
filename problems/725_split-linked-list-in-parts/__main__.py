from typing import Optional, List


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def splitListToParts(
        self, head: Optional[ListNode], k: int
    ) -> List[Optional[ListNode]]:
        if not head:
            return [None] * k

        total_len, pos = 0, head
        while pos:
            total_len += 1
            pos = pos.next

        split_lists = [ListNode(0) for _ in range(k)]
        dummy_heads = [split_lists[i] for i in range(k)]
        for i in range(k):
            split_len = total_len // k + (1 if i < total_len % k else 0)
            for _ in range(split_len):
                split_lists[i].next = head
                head = head.next
                split_lists[i] = split_lists[i].next
                split_lists[i].next = None
        return [node.next for node in dummy_heads]


solution = Solution()
print(solution.splitListToParts(ListNode(1, ListNode(2, ListNode(3))), 5))
