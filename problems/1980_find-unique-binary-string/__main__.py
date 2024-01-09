from typing import List


class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        num_len = len(nums[0])
        nums.sort()
        for i in range(2**num_len):
            bin_i = bin(i)[2:]
            bin_i = "0" * (num_len - len(bin_i)) + bin_i
            if i >= len(nums) or nums[i] != bin_i:
                return bin_i


solution = Solution()
print(solution.findDifferentBinaryString(["01", "10"]))
print(solution.findDifferentBinaryString(["00", "01"]))
print(solution.findDifferentBinaryString(["111", "011", "001"]))
