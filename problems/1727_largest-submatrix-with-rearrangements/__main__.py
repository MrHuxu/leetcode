from typing import List


class Solution:
    def largestSubmatrix(self, matrix: List[List[int]]) -> int:
        if not matrix:
            return 0

        row_len = len(matrix[0])
        for i in range(row_len):
            consecutive_cnt = 0
            for j in range(len(matrix)):
                if matrix[j][i] == 0:
                    consecutive_cnt = 0
                else:
                    consecutive_cnt += 1
                matrix[j][i] = consecutive_cnt
        ret = 0
        for i in range(len(matrix)):
            matrix[i].sort()
            ret = max([ret] + [matrix[i][j] * (row_len - j) for j in range(row_len)])
        return ret


solution = Solution()
print(solution.largestSubmatrix([[0, 0, 1], [1, 1, 1], [1, 0, 1]]))
print(solution.largestSubmatrix([[1, 0, 1, 0, 1]]))
print(solution.largestSubmatrix([[1, 1, 0], [1, 0, 1]]))
