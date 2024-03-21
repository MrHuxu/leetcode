# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        return self.helper(head)[0]

    def helper(self, node):
        if not node or not node.next:
            return node, node
        head, tail = self.helper(node.next)
        tail.next, node.next = node, None
        return head, node
