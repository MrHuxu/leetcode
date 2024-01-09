from typing import List


class Solution:
    def validateBinaryTreeNodes(
        self, n: int, leftChild: List[int], rightChild: List[int]
    ) -> bool:
        nums = set([i for i in range(n)])
        for node in leftChild:
            if node in nums:
                nums.remove(node)
        for node in rightChild:
            if node in nums:
                nums.remove(node)
        if len(nums) != 1:
            return False

        # print(nums)
        visited = set()
        nodes = [nums.pop()]
        while nodes:
            node = nodes.pop()
            # print(node)
            if node in visited:
                return False
            if leftChild[node] != -1:
                nodes.append(leftChild[node])
            if rightChild[node] != -1:
                nodes.append(rightChild[node])
            visited.add(node)
        return len(visited) == n


solution = Solution()
print(solution.validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, -1, -1, -1]))
print(solution.validateBinaryTreeNodes(4, [1, 0, 3, -1], [-1, -1, -1, -1]))
