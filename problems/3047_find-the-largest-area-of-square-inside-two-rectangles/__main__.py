from typing import List


class Solution:
    def largestSquareArea(
        self, bottomLeft: List[List[int]], topRight: List[List[int]]
    ) -> int:
        ret, n = 0, len(bottomLeft)
        for i in range(n - 1):
            for j in range(i + 1, n):
                ret = max(
                    ret,
                    self.getSquareEdgeLen(
                        [bottomLeft[i], topRight[i]], [bottomLeft[j], topRight[j]]
                    )
                    ** 2,
                )
        return ret

    # [[1, 1], [2, 2]]    [[3, 1], [4, 2]]
    # [[3, 1], [4, 2]]    [[1, 1], [2, 2]]
    def getSquareEdgeLen(self, rect1: List[List[int]], rect2: List[List[int]]) -> int:
        overlap_x, overlap_y = 0, 0
        if rect1[0][0] <= rect2[0][0]:
            if rect1[1][0] > rect2[0][0]:
                overlap_x = min(rect1[1][0], rect2[1][0]) - rect2[0][0]
        elif rect1[0][0] < rect2[1][0]:
            overlap_x = min(rect1[1][0], rect2[1][0]) - rect1[0][0]
        if rect1[0][1] <= rect2[0][1]:
            if rect1[1][1] > rect2[0][1]:
                overlap_y = min(rect1[1][1], rect2[1][1]) - rect2[0][1]
        elif rect1[0][1] < rect2[1][1]:
            overlap_y = min(rect1[1][1], rect2[1][1]) - rect1[0][1]
        return min(overlap_x, overlap_y)


solution = Solution()
print(
    solution.largestSquareArea(
        bottomLeft=[[1, 1], [2, 2], [3, 1]], topRight=[[3, 3], [4, 4], [6, 6]]
    )
)
print(
    solution.largestSquareArea(
        bottomLeft=[[1, 1], [2, 2], [1, 2]], topRight=[[3, 3], [4, 4], [3, 4]]
    )
)
print(
    solution.largestSquareArea(
        bottomLeft=[[1, 1], [3, 3], [3, 1]], topRight=[[2, 2], [4, 4], [4, 2]]
    )
)
