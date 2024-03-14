class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        idx1 = {s: i for i, s in enumerate(list1)}
        sum_s = {}
        for i, s in enumerate(list2):
            if s not in idx1:
                continue
            sum_s.setdefault(i + idx1[s], []).append(s)
        return sorted((k, v) for k, v in sum_s.items())[0][1]
