MAX_SUM = 100 * 100


class Solution:
    def minFallingPathSum(self, matrix: List[List[int]]) -> int:
        n = len(matrix)
        for i in range(1, n):
            for j in range(n):
                matrix[i][j] += min(
                    matrix[i - 1][j],
                    matrix[i - 1][j - 1] if j > 0 else MAX_SUM,
                    matrix[i - 1][j + 1] if j < n - 1 else MAX_SUM,
                )
        return min(matrix[-1])
