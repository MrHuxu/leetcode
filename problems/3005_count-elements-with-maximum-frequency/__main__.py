class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        counter = Counter(nums)
        max_freq = max(counter.values())
        return sum(value for value in counter.values() if value == max_freq)
