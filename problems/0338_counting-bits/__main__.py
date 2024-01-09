from typing import List


class Solution:
    ret: List[int]

    def countBits(self, n: int) -> List[int]:
        self.ret = [0] * (n + 1)
        self.helper(0, 0, n)
        return self.ret

    def helper(self, num: int, cnt: int, n: int):
        if num > n:
            return

        self.ret[num] = cnt
        if num != 0:
            self.helper(num << 1, cnt, n)
        self.helper((num << 1) | 1, cnt + 1, n)


solution = Solution()
print(solution.countBits(2))
print(solution.countBits(5))
print(solution.countBits(8))
print(solution.countBits(10))
