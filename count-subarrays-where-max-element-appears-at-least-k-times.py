class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        max_val = max(nums)
        ret = 0
        left, right, cnt = 0, 0, 0
        while right < len(nums):
            cnt += 1 if nums[right] == max_val else 0
            while cnt >= k:
                """
                保留中间 max_val 出现 k 次的最小子数组
                假设左边有 x 项右边有 y 项
                那么包含这个子数组的符合结果的数组应该有 x*y 项
                """

                ret += len(nums) - right  # 右边的 y 项
                cnt -= 1 if nums[left] == max_val else 0
                left += 1  # 累加左边 x 次
            right += 1
        return ret
