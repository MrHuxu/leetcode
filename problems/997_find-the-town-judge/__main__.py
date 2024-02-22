class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        in_degree, out_degree = {}, set()
        for o, i in trust:
            out_degree.add(o)
            in_degree[i] = in_degree.get(i, 0) + 1
        for i in range(1, n + 1):
            if in_degree.get(i, 0) == n - 1 and i not in out_degree:
                return i
        return -1
