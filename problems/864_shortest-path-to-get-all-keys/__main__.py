from typing import Dict, List, Tuple

DIRECTIONS: List[Tuple[int, int]] = [(0, 1), (0, -1), (1, 0), (-1, 0)]


class Solution:
    def shortestPathAllKeys(self, grid: List[str]) -> int:
        total_key_flag, start_row, start_col = 0, 0, 0
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == '@':
                    start_row, start_col = i, j
                elif ord('a') <= ord(grid[i][j]) and ord(grid[i][j]) <= ord('z'):
                    total_key_flag = total_key_flag | 1 << (
                        ord(grid[i][j]) - ord('a'))
        queue: List[Tuple[int, int, int, int]] = [(start_row, start_col, 0, 0)]
        visited: List[List[Dict[int, bool]]] = [
            [{} for _ in range(len(grid[0]))] for _ in range(len(grid))]
        visited[start_row][start_col][0] = True
        while queue:
            row, col, steps, key_flag = queue.pop(0)

            if key_flag == total_key_flag:
                return steps

            for direction in DIRECTIONS:
                next_row, next_col = row + direction[0], col + direction[1]

                if next_row < 0 or next_row >= len(grid) or next_col < 0 or next_col >= len(grid[0]) or grid[next_row][next_col] == '#':
                    continue

                if grid[next_row][next_col] == '.' or grid[next_row][next_col] == '@':
                    if key_flag not in visited[next_row][next_col]:
                        visited[next_row][next_col][key_flag] = True
                        queue.append((next_row, next_col, steps + 1, key_flag))
                    continue

                if ord(grid[next_row][next_col]) >= ord('A') and ord(grid[next_row][next_col]) <= ord('Z'):
                    if key_flag not in visited[next_row][next_col]:
                        visited[next_row][next_col][key_flag] = True
                        if 1 << (ord(grid[next_row][next_col]) - ord('A')) & key_flag:
                            queue.append(
                                (next_row, next_col, steps + 1, key_flag))
                    continue

                next_key_flag = key_flag | 1 << (
                    ord(grid[next_row][next_col]) - ord('a'))
                if next_key_flag == total_key_flag:
                    return steps + 1
                if next_key_flag not in visited[next_row][next_col]:
                    visited[next_row][next_col][next_key_flag] = True
                    queue.append(
                        (next_row, next_col, steps + 1, next_key_flag))

        return -1


solution = Solution()
print(solution.shortestPathAllKeys(["@.a..", "###.#", "b.A.B"]))
print(solution.shortestPathAllKeys(["@..aA", "..B#.", "....b"]))
print(solution.shortestPathAllKeys(["@Aa"]))
print(solution.shortestPathAllKeys([
    "@...a",
    ".###A",
    "b.BCc"]))
