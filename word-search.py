DIRECTIONS = [(-1, 0), (0, -1), (0, 1), (1, 0)]


class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        m, n, visited = len(board), len(board[0]), set()

        def dfs(i: int, j: int, idx: int, visited: Set[Tuple[int, int]]) -> bool:
            if board[i][j] != word[idx]:
                return False
            visited.add((i, j))
            if len(visited) == len(word):
                return True
            ret = any(
                dfs(i + x, j + y, idx + 1, visited)
                for x, y in DIRECTIONS
                if (i + x, j + y) not in visited and 0 <= i + x < m and 0 <= j + y < n
            )
            visited.remove((i, j))
            return ret

        return any(dfs(i, j, 0, visited) for i in range(m) for j in range(n))
