class Solution:
    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:
        points.sort(key=lambda x: x[0])
        ret = 0
        for i in range(len(points) - 1):
            ret = max(ret, points[i + 1][0] - points[i][0])
        #print(points)
        return ret