class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        pre_product, post_product = [0] * n, [0] * n
        for i in range(n):
            pre_product[i] = nums[i] * (1 if i == 0 else pre_product[i - 1])
        for i in reversed(range(n)):
            post_product[i] = nums[i] * (1 if i == n - 1 else post_product[i + 1])
        return [
            (1 if i == 0 else pre_product[i - 1])
            * (1 if i == n - 1 else post_product[i + 1])
            for i in range(n)
        ]
