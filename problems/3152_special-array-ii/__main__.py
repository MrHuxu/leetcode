from typing import List


class Solution:
    def get_overlap(self, query1: List[int], query2: List[int]) -> int:
        return max(0, min(query1[1], query2[1]) - max(query1[0], query2[0])) + 1

    def isArraySpecial(self, nums: List[int], queries: List[List[int]]) -> List[bool]:
        invalid_queries = []
        pre_idx = 0
        for i, num in enumerate(nums):
            if i == 0:
                continue
            if num % 2 != nums[i - 1] % 2:
                if pre_idx != i - 1:
                    invalid_queries.append([pre_idx, i - 1])
                pre_idx = i
        if pre_idx != len(nums) - 1:
            invalid_queries.append([pre_idx, len(nums) - 1])
        queries_with_idx = sorted(
            (query[0], query[1], i) for i, query in enumerate(queries)
        )

        ret = [True] * len(queries)
        j = 0
        for i, query in enumerate(queries_with_idx):
            if (
                i > 0
                and query[0] == queries_with_idx[i - 1][0]
                and query[1] == queries_with_idx[i - 1][1]
            ):
                ret[query[2]] = ret[queries_with_idx[i - 1][2]]
                continue

            if j == len(invalid_queries):
                break

            tmp = j
            while tmp < len(invalid_queries):
                if self.get_overlap([query[0], query[1]], invalid_queries[tmp]) > 1:
                    ret[query[2]] = False
                    break
                tmp += 1

            while (
                j < len(invalid_queries)
                and i < len(queries_with_idx) - 1
                and invalid_queries[j][1] < queries_with_idx[i + 1][0]
            ):
                j += 1

        return ret


print(Solution().isArraySpecial(nums=[3, 4, 1, 2, 6], queries=[[0, 4]]))
print(Solution().isArraySpecial(nums=[4, 3, 1, 6], queries=[[0, 2], [2, 3]]))
print(
    Solution().isArraySpecial([10, 8, 8, 9], [[2, 3], [0, 1], [2, 3], [1, 3], [2, 2]])
)
print(
    Solution().isArraySpecial(
        [5, 9, 3], [[0, 2], [2, 2], [1, 2], [1, 1], [0, 2], [0, 1], [0, 1], [1, 2]]
    )
)
