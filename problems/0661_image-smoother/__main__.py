DIRECTIONS = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
]

class Solution:
    def imageSmoother(self, img: List[List[int]]) -> List[List[int]]:
        m, n = len(img), len(img[0])
        ret = [[0] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                sum, cnt = img[i][j], 1
                for x, y in DIRECTIONS:
                    if 0 <= i + x < m and 0 <= j + y < n:
                        sum += img[i + x][j + y]
                        cnt += 1
                ret[i][j] = sum // cnt
        return ret