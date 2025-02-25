from typing import List, Tuple


class Solution:
    def maximumBeauty(self, items: List[List[int]], queries: List[int]) -> List[int]:
        ret = [0] * len(queries)
        arr: List[Tuple[int, int, int]] = sorted(
            [(item[0], 0, item[1]) for item in items]
            + [(query, 1, i) for i, query in enumerate(queries)]
        )
        curr_max = 0
        for item in arr:
            if item[1] == 0:
                curr_max = max(curr_max, item[2])
            else:
                ret[item[2]] = curr_max
        return ret


print(
    Solution().maximumBeauty(
        items=[[1, 2], [3, 2], [2, 4], [5, 6], [3, 5]], queries=[1, 2, 3, 4, 5, 6]
    )
)
print(Solution().maximumBeauty(items=[[1, 2], [1, 2], [1, 3], [1, 4]], queries=[1]))
print(Solution().maximumBeauty(items=[[10, 1000]], queries=[5]))
