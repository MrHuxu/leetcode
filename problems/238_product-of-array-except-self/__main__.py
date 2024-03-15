class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        pre_product, post_product = [0] * n, [0] * n
        for i in range(n):
            pre_product[i] = nums[i] * (1 if i == 0 else pre_product[i - 1])
            post_product[n - 1 - i] = nums[n - 1 - i] * (
                1 if i == 0 else post_product[n - i]
            )
        return [
            (1 if i == 0 else pre_product[i - 1])
            * (1 if i == n - 1 else post_product[i + 1])
            for i in range(n)
        ]
