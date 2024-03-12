class Solution:

    def __init__(self, m: int, n: int):
        self.m, self.n = m, n
        self.total = m * n
        self.used = set()

    def flip(self) -> List[int]:
        idx = randint(0, self.total - 1)
        while idx in self.used:
            idx = randint(0, self.total - 1)
        self.used.add(idx)
        return [idx // self.n, idx % self.n]

    def reset(self) -> None:
        self.used = set()


# Your Solution object will be instantiated and called as such:
# obj = Solution(m, n)
# param_1 = obj.flip()
# obj.reset()
