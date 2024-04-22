adj = {
    "0": ["1", "9"],
    "1": ["2", "0"],
    "2": ["3", "1"],
    "3": ["4", "2"],
    "4": ["5", "3"],
    "5": ["6", "4"],
    "6": ["7", "5"],
    "7": ["8", "6"],
    "8": ["9", "7"],
    "9": ["0", "8"],
}


class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        if "0000" in deadends:
            return -1

        queue = [("0000", 0)]
        visited = set(deadends)
        while queue:
            curr, step = queue.pop(0)
            if curr == target:
                return step
            for i in range(4):
                for a in adj[curr[i]]:
                    next = curr[:i] + a + curr[i + 1 :]
                    if next not in visited:
                        visited.add(next)
                        queue.append((next, step + 1))
        return -1
