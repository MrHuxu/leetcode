from typing import List, Tuple


class Solution:
    def countGoodNodes(self, edges: List[List[int]]) -> int:
        adj = {}
        for start, end in edges:
            adj.setdefault(start, []).append(end)
            adj.setdefault(end, []).append(start)

        tree = {}
        visited = {0}
        queue = [0]
        while queue:
            node = queue.pop(0)
            for neighbor in adj[node]:
                if neighbor not in visited:
                    tree.setdefault(node, []).append(neighbor)
                    visited.add(neighbor)
                    queue.append(neighbor)

        def helper(node: int) -> Tuple[int, int]:
            if node not in tree:
                return 1, 1
            ret, sum_ = [], []
            for neighbor in tree[node]:
                r, s = helper(neighbor)
                ret.append(r)
                sum_.append(s)
            all_equal = all(s == sum_[0] for s in sum_)
            return sum(ret) + (1 if all_equal else 0), sum(sum_) + 1

        return helper(0)[0]


print(Solution().countGoodNodes([[6, 0], [1, 0], [5, 1], [2, 5], [3, 1], [4, 3]]))
print(Solution().countGoodNodes([[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]]))
print(
    Solution().countGoodNodes(
        [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 7], [3, 8]]
    )
)
print(
    Solution().countGoodNodes(
        [
            [0, 1],
            [1, 2],
            [1, 3],
            [1, 4],
            [0, 5],
            [5, 6],
            [6, 7],
            [7, 8],
            [0, 9],
            [9, 10],
            [9, 12],
            [10, 11],
        ]
    )
)
