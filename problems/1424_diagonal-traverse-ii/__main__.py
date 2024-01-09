from collections import deque
from typing import List, Set, Tuple

DIRECTIONS = [[1, 0], [0, 1]]


class Solution:
    def findDiagonalOrder(self, nums: List[List[int]]) -> List[int]:
        ret: List[int] = []
        queue: deque[Tuple[int, int]] = deque([(0, 0)])
        visited: Set[Tuple[int, int]] = set()
        while queue:
            row, col = queue.popleft()
            ret.append(nums[row][col])

            for direction in DIRECTIONS:
                next_row, next_col = row + direction[0], col + direction[1]
                if (
                    (next_row, next_col) not in visited
                    and next_row < len(nums)
                    and next_col < len(nums[next_row])
                ):
                    queue.append((next_row, next_col))
                    visited.add((next_row, next_col))
        return ret


solution = Solution()
print(solution.findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
print(
    solution.findDiagonalOrder(
        [[1, 2, 3, 4, 5], [6, 7], [8], [9, 10, 11], [12, 13, 14, 15, 16]]
    )
)
