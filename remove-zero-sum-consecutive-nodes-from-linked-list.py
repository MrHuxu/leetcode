from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def removeZeroSumSublists(self, head: Optional[ListNode]) -> Optional[ListNode]:
        arr, tmp = [], head
        while tmp:
            arr.append(tmp.val)
            tmp = tmp.next
        stack, stack_ret = [], []
        for num in arr:
            if num == 0:
                continue
            if not stack:
                stack.append({num: 1})
                stack_ret.append(num)
            else:
                tmp = stack[-1]
                if (0 - num) in tmp:
                    pop_times = tmp[0 - num]
                    while pop_times > 0:
                        stack.pop()
                        stack_ret.pop()
                        pop_times -= 1
                else:
                    new_item = {k + num: v + 1 for k, v in tmp.items()}
                    if num not in new_item:
                        new_item[num] = 1
                    stack.append(new_item)
                    stack_ret.append(num)
        # print(stack_ret)
        dummy_head = ListNode()
        tmp = dummy_head
        for num in stack_ret:
            tmp.next = ListNode(num)
            tmp = tmp.next
        return dummy_head.next


print(
    Solution().removeZeroSumSublists(
        ListNode(1, ListNode(2, ListNode(-3, ListNode(3, ListNode(1)))))
    )
)
print(
    Solution().removeZeroSumSublists(
        ListNode(1, ListNode(2, ListNode(3, ListNode(-3, ListNode(4)))))
    )
)
print(
    Solution().removeZeroSumSublists(
        ListNode(
            1,
            ListNode(
                3,
                ListNode(
                    2,
                    ListNode(
                        -3,
                        ListNode(
                            -2, ListNode(5, ListNode(5, ListNode(-5, ListNode(1))))
                        ),
                    ),
                ),
            ),
        )
    )
)

print(
    Solution().removeZeroSumSublists(
        ListNode(
            1,
            ListNode(
                -2, ListNode(2, ListNode(0, ListNode(-1, ListNode(0, ListNode(2)))))
            ),
        )
    )
)
