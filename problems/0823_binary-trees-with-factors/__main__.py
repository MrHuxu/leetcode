from typing import List, Dict


MOD = 10**9 + 7

class Solution:
    def numFactoredBinaryTrees(self, arr: List[int]) -> int:
        arr_set, sorted_arr = set(arr), sorted(arr)
        dp: Dict[int, int] = {num: 1 for num in arr_set}
        ret = 0
        for i, num in enumerate(sorted_arr):
            for j in range(i):
                if num % sorted_arr[j] == 0 and num // sorted_arr[j] in arr_set:
                    dp[num] += dp[sorted_arr[j]] * dp[num // sorted_arr[j]]
            ret = (ret + dp[num]) % MOD
        return ret
    
solution = Solution()
print(solution.numFactoredBinaryTrees([2, 4]))
print(solution.numFactoredBinaryTrees([2, 4, 5, 10]))