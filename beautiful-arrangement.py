class Solution:
    def countArrangement(self, n: int) -> int:
        return self.dfs(set(range(1, n + 1)), n, 1)

    def dfs(self, nums: Set[int], n: int, i: int) -> int:
        if i == n + 1:
            return 1
        ret = 0
        for num in list(nums):
            if num % i == 0 or i % num == 0:
                nums.remove(num)
                ret += self.dfs(nums, n, i + 1)
                nums.add(num)
        return ret
