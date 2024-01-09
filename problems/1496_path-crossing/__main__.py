DIRECTIONS = {
    'N': (0, 1),
    'S': (0, -1),
    'E': (-1, 0),
    'W': (1, 0),
}

class Solution:
    def isPathCrossing(self, path: str) -> bool:
        position = (0, 0)
        visited = set([position])
        for p in path:
            next = (position[0] + DIRECTIONS[p][0], position[1] + DIRECTIONS[p][1])
            if next in visited:
                return True
            visited.add(next)
            position = next
        return False
        