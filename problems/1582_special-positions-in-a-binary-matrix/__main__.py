class Solution:
    def numSpecial(self, mat: List[List[int]]) -> int:
        row_cnt = [sum(row) for row in mat]
        col_cnt = [sum(col) for col in zip(*mat)]
        return sum(mat[i][j] == 1 and row_cnt[i] == 1 and col_cnt[j] == 1 for i in range(len(mat)) for j in range(len(mat[0])))
