class Solution:
    def check(self, nums: List[int]) -> bool:
        n, start_idx = len(nums), 0
        for i in range(n):
            if i > 0 and nums[i] < nums[i - 1]:
                start_idx = i
                break
        for i in range(1, n):
            num1, num2 = nums[(start_idx + i) % n], nums[(start_idx + i - 1) % n]
            if num1 < num2:
                return False
        return True


print(Solution().check([3, 4, 5, 1, 2]))
print(Solution().check([2, 1, 3, 4]))
print(Solution().check([1, 2, 3]))
print(Solution().check([1, 1, 1]))
