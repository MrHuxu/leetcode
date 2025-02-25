class Solution:
    def largestSumOfAverages(self, nums: List[int], k: int) -> float:
        accu = list(accumulate(nums))

        @cache
        def dfs(i: int, j: int, k: int) -> float:
            if k == 1:
                return (accu[j] - (0 if i == 0 else accu[i - 1])) / (j - i + 1)
            if (j - i + 1) == k:
                return accu[j] - (0 if i == 0 else accu[i - 1])
            return max(dfs(i, m, 1) + dfs(m + 1, j, k - 1) for m in range(i, j - k + 2))

        return dfs(0, len(nums) - 1, k)
