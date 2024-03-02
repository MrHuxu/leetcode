from typing import Optional


# Definition for a Node.
class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child


class Solution:
    def flatten(self, head: Optional[Node]) -> Optional[Node]:
        dummy_head = Node(0, None, None, None)
        self.dfs(dummy_head, head)
        if dummy_head.next:
            dummy_head.next.prev = None
        return dummy_head.next

    def dfs(self, tail: Node, head: Optional[Node]) -> Optional[Node]:
        if not head:
            return None
        while head:
            tail.next, head.prev = head, tail
            tail, head = tail.next, head.next

            if tail.child:
                tmp, tail.child = tail.child, None
                tail = self.dfs(tail, tmp)
        return tail


n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12 = (
    Node(1, None, None, None),
    Node(2, None, None, None),
    Node(3, None, None, None),
    Node(4, None, None, None),
    Node(5, None, None, None),
    Node(6, None, None, None),
    Node(7, None, None, None),
    Node(8, None, None, None),
    Node(9, None, None, None),
    Node(10, None, None, None),
    Node(11, None, None, None),
    Node(12, None, None, None),
)
n1.next = n2
n2.next, n2.prev = n3, n1
n3.next, n3.prev, n3.child = n4, n2, n7
n4.next, n4.prev = n5, n3
n5.next, n5.prev = n6, n4
n6.prev = n5
n7.next = n8
n8.next, n8.prev, n8.child = n9, n7, n11
n9.next, n9.prev = n10, n8
n11.next = n12
n12.prev = n11
ret: Node = Solution().flatten(n1)
while ret:
    print(
        ret.val,
        ret.prev.val if ret.prev else None,
        ret.next.val if ret.next else None,
        ret.child.val if ret.child else None,
    )
    ret = ret.next
