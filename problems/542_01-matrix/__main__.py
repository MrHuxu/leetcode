from typing import List, Tuple

DIRECTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]]


class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        ret: List[List[int]] = [[-1] * len(mat[0]) for _ in range(len(mat))]
        positions: List[Tuple[int, int]] = []
        for i in range(len(mat)):
            for j in range(len(mat[0])):
                if mat[i][j] == 0:
                    positions.append((i, j))
                    ret[i][j] = 0
        distance = 1
        while positions:
            new_positions: List[Tuple[int, int]] = []
            for i, j in positions:
                for di, dj in DIRECTIONS:
                    ni, nj = i + di, j + dj
                    if 0 <= ni < len(mat) and 0 <= nj < len(mat[0]):
                        if ret[ni][nj] == -1:
                            ret[ni][nj] = distance
                            new_positions.append((ni, nj))
            distance += 1
            positions = new_positions
        return ret


solution = Solution()
print(solution.updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
print(solution.updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]))
print(
    solution.updateMatrix(
        [
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
            [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
            [1, 1, 1, 1, 0, 1, 0, 0, 1, 1],
        ]
    )
)
