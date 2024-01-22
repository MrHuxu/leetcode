class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        ret = [0, 0]
        sum, visited, n = 0, set(), len(nums)
        for num in nums:
            if num in visited:
                ret[0] = num
            else:
                visited.add(num)
                sum += num
        ret[1] = (1 + n) * n // 2 - sum
        return ret