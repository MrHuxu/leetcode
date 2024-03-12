class Solution:

    def __init__(self, w: List[int]):
        self.w = w
        self.total = sum(w)
        self.accu = list(accumulate(w))

    def pickIndex(self) -> int:
        num = randint(1, self.total)
        left, right = 0, len(self.w) - 1
        while left <= right:
            mid = (left + right) // 2
            if num == self.accu[mid]:
                return mid
            if num < self.accu[mid]:
                if mid == 0 or num > self.accu[mid - 1]:
                    return mid
                else:
                    right = mid - 1
            else:
                left = mid + 1


# Your Solution object will be instantiated and called as such:
# obj = Solution(w)
# param_1 = obj.pickIndex()
