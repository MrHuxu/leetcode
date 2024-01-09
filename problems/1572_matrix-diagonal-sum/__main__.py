class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        n = len(mat)
        ret = 0
        for i in range(n):
            ret += mat[i][i] + mat[i][n - 1 - i]
        if n % 2:
            ret -= mat[n // 2][n // 2]
        return ret