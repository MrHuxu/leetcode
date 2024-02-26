class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        pos = [-1] * 2001
        for i, num in enumerate(numbers):
            sub = (target - num) + 1000
            if 0 <= sub <= 2000 and pos[sub] != -1:
                return [pos[sub]+1, i+1]
            pos[num + 1000] = i
