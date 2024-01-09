from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def allPossibleFBT(self, n: int) -> List[Optional[TreeNode]]:
        if n % 2 == 0:
            return []

        dp: List[List[Optional[TreeNode]]] = [[], [TreeNode(0)]]
        for i in range(2, n + 1):
            if i % 2 == 0:
                dp.append([])
                continue

            dp.append([])
            for j in range(1, (i - 1) // 2 + 1):
                for left in dp[j]:
                    for right in dp[i - 1 - j]:
                        dp[i].append(TreeNode(0, left, right))

                        if j != i - 1 - j:
                            dp[i].append(TreeNode(0, right, left))

        return dp[n]


solution = Solution()
print(solution.allPossibleFBT(7))
print(solution.allPossibleFBT(3))
