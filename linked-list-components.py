# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def numComponents(self, head: Optional[ListNode], nums: List[int]) -> int:
        s = set(nums)
        ret = 0
        while s:
            if head.val not in s:
                head = head.next
                continue
            ret += 1
            while head and head.val in s:
                s.remove(head.val)
                head = head.next
        return ret
