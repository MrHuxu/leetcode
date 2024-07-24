from typing import List


class Solution:
    def luckyNumbers(self, matrix: List[List[int]]) -> List[int]:
        m, n = len(matrix), len(matrix[0])
        row_min, col_max = [-1] * m, [-1] * n
        for i in range(m):
            for j in range(n):
                if row_min[i] == -1 or matrix[i][j] < row_min[i]:
                    row_min[i] = matrix[i][j]
                if col_max[j] == -1 or matrix[i][j] > col_max[j]:
                    col_max[j] = matrix[i][j]
        return [
            row_min[i] for i in range(m) for j in range(n) if row_min[i] == col_max[j]
        ]


print(Solution().luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]))
print(Solution().luckyNumbers([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]))
print(Solution().luckyNumbers([[7, 8], [1, 2]]))