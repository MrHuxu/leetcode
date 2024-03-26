class Solution:
    def largestTriangleArea(self, points: List[List[int]]) -> float:
        ret, n = 0, len(points)
        for i, (x1, y1) in enumerate(points):
            for j in range(i + 1, n):
                x2, y2 = points[j]
                for k in range(j + 1, n):
                    x3, y3 = points[k]
                    ret = max(
                        ret, abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2)
                    )
        return ret
