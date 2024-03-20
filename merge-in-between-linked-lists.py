# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeInBetween(
        self, list1: ListNode, a: int, b: int, list2: ListNode
    ) -> ListNode:
        dummy_head = ListNode(0, list1)

        node_a, node_b = dummy_head, list1
        for _ in range(a):
            node_a = node_a.next
            node_b = node_b.next
        for _ in range(b - a):
            node_b = node_b.next

        list2_tail = list2
        while list2_tail.next:
            list2_tail = list2_tail.next

        node_a.next = list2
        list2_tail.next = node_b.next
        return dummy_head.next
