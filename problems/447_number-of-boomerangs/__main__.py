class Solution:
    def numberOfBoomerangs(self, points: List[List[int]]) -> int:
        n = len(points)
        cnt: Dict[int, Dict[int, int]] = {}
        for i in range(n - 1):
            p1 = points[i]
            for j in range(i + 1, n):
                p2 = points[j]
                d = (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2
                cnt.setdefault(i, {})[d] = cnt.get(i, {}).get(d, 0) + 1
                cnt.setdefault(j, {})[d] = cnt.get(j, {}).get(d, 0) + 1
        return sum(vv * (vv - 1) for v in cnt.values() for vv in v.values())
