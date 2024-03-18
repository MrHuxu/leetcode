class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        points.sort(key=lambda x: (x[0], x[1]))
        ret = 1
        last_range = points[0]
        for point in points[1:]:
            if point[0] > last_range[1]:
                ret += 1
                last_range = point
            else:
                last_range = [
                    max(last_range[0], point[0]),
                    min(last_range[1], point[1]),
                ]
        return ret
