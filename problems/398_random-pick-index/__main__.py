class Solution:

    def __init__(self, nums: List[int]):
        self.target_idx = {}
        for i, num in enumerate(nums):
            self.target_idx.setdefault(num, []).append(i)

    def pick(self, target: int) -> int:
        return random.choice(self.target_idx[target])


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.pick(target)
