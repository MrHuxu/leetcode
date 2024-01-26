class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        visited, n = set(), len(nums)
        ret = [0, (1 + n) * n // 2]
        for num in nums:
            if num in visited:
                ret[0] = num
            else:
                visited.add(num)
                ret[1] -= num
        return ret