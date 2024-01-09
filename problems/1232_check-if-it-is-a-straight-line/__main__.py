from typing import List


class Solution:
    def checkStraightLine(self, coordinates: List[List[int]]) -> bool:
        if len(coordinates) <= 2:
            return True
        x1, y1 = coordinates[0]
        x2, y2 = coordinates[1]
        for x, y in coordinates[2:]:
            if (y2 - y1) * (x - x1) != (x2 - x1) * (y - y1):
                return False
        return True
