from typing import Dict, List


class Solution:
    def numSubmatrixSumTarget(self, matrix: List[List[int]], target: int) -> int:
        m, n = len(matrix), len(matrix[0])
        for i in range(m):
            for j in range(n):
                if i == 0 and j == 0:
                    continue
                elif i == 0:
                    matrix[i][j] += matrix[i][j - 1]
                elif j == 0:
                    matrix[i][j] += matrix[i - 1][j]
                else:
                    matrix[i][j] = (
                        matrix[i - 1][j]
                        + matrix[i][j - 1]
                        - matrix[i - 1][j - 1]
                        + matrix[i][j]
                    )
        ret = 0
        for i in range(m):
            for j in range(i, m):
                pre: Dict[int, int] = {}

                for k in range(n):
                    curr = matrix[j][k] if i == 0 else matrix[j][k] - matrix[i - 1][k]

                    if curr == target:
                        ret += 1
                    if curr - target in pre:
                        ret += pre[curr - target]
                    pre[curr] = pre.get(curr, 0) + 1
        return ret


solution = Solution()
print(
    solution.numSubmatrixSumTarget(matrix=[[0, 1, 0], [1, 1, 1], [0, 1, 0]], target=0)
)
print(solution.numSubmatrixSumTarget(matrix=[[1, -1], [-1, 1]], target=0))
print(solution.numSubmatrixSumTarget(matrix=[[904]], target=0))
