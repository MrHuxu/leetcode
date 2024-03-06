class Solution:
    def findDiagonalOrder(self, mat: List[List[int]]) -> List[int]:
        m, n = len(mat), len(mat[0])
        ret = []
        total = m + n - 1
        for i in range(total):
            x, y = [i, 0] if i < m else [m - 1, i - m + 1]
            vals = []
            while 0 <= x < m and 0 <= y < n:
                vals.append(mat[x][y])
                x, y = x - 1, y + 1
            ret += vals if i % 2 == 0 else reversed(vals)
        return ret
