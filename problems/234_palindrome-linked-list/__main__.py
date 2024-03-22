# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        arr = []

        def helper(node, len):
            if not node:
                return -len, True
            arr.append(node.val)
            idx, ret = helper(node.next, len + 1)
            return (0, False) if not ret else (idx + 1, node.val == arr[idx])

        return helper(head, 0)[1]
