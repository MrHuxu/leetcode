# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        l, tmp = 0, head
        while tmp:
            tmp = tmp.next
            l += 1
        slow, fast = head, head
        for _ in range(l // 2 + l % 2):
            fast = fast.next
        while fast:
            slow, fast = slow.next, fast.next
        return slow
