from typing import List, Set, Tuple

DIRECTIONS = [(-1, 0), (0, -1), (1, 0), (0, 1)]


class Solution:
    def latestDayToCross(self, row: int, col: int, cells: List[List[int]]) -> int:
        left, right = 0, len(cells) - 1
        while left <= right:
            mid = (left + right) // 2
            # print(left, right, self.canCross(row, col, cells[:mid]))
            if self.canCross(row, col, cells[:mid]):
                left = mid + 1
            else:
                right = mid - 1
        return right

    def canCross(self, row: int, col: int, cells: List[List[int]]) -> bool:
        board = [[0] * col for _ in range(row)]
        for cell in cells:
            board[cell[0] - 1][cell[1] - 1] = 1

        queue: List[Tuple[int, int]] = []
        visited: Set[Tuple[int, int]] = set()
        for i in range(len(board[0])):
            if board[0][i] == 0:
                queue.append((0, i))
                visited.add((0, i))
        if not queue:
            return False

        while queue:
            # print(queue)
            x, y = queue.pop(0)
            if x == len(board) - 1:
                return True
            for dx, dy in DIRECTIONS:
                nx, ny = x + dx, y + dy
                if (nx, ny) in visited:
                    continue
                if (
                    0 <= nx
                    and nx < len(board)
                    and 0 <= ny
                    and ny < len(board[0])
                    and board[nx][ny] == 0
                ):
                    board[nx][ny] = 1
                    queue.append((nx, ny))
                    visited.add((nx, ny))
        return False


solution = Solution()
print(solution.latestDayToCross(row=2, col=2, cells=[[1, 1], [2, 1], [1, 2], [2, 2]]))
print(solution.latestDayToCross(row=2, col=2, cells=[[1, 1], [1, 2], [2, 1], [2, 2]]))
print(
    solution.latestDayToCross(
        row=3,
        col=3,
        cells=[[1, 2], [2, 1], [3, 3], [2, 2], [1, 1], [1, 3], [2, 3], [3, 2], [3, 1]],
    )
)
