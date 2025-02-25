class Solution:
    def countOfPairs(self, n: int, x: int, y: int) -> List[int]:
        adj: List[Set[int]] = [set() for _ in range(n + 1)]
        for i in range(1, n + 1):
            # print(i)
            if i > 1:
                adj[i].add(i - 1)
            if i < n:
                adj[i].add(i + 1)
        adj[x].add(y)
        adj[y].add(x)
        # print(adj)
        ret = [0] * n
        for i in range(1, n + 1):
            visited = set([i])
            queue = [(i, 0)]
            while queue:
                num, dis = queue.pop(0)
                if dis != 0:
                    ret[dis - 1] += 1
                for next in adj[num]:
                    if next not in visited:
                        visited.add(next)
                        queue.append((next, dis + 1))
        return ret
