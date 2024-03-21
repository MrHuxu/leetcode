class Solution:
    def floodFill(
        self, image: List[List[int]], sr: int, sc: int, color: int
    ) -> List[List[int]]:
        m, n = len(image), len(image[0])
        queue = [(sr, sc)]
        visited = set(queue)
        while queue:
            r, c = queue.pop(0)
            for x, y in [[-1, 0], [0, -1], [0, 1], [1, 0]]:
                rr, cc = r + x, c + y
                if (
                    0 <= rr < m
                    and 0 <= cc < n
                    and image[rr][cc] == image[r][c]
                    and (rr, cc) not in visited
                ):
                    visited.add((rr, cc))
                    queue.append((rr, cc))
            image[r][c] = color
        return image
