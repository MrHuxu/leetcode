class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        for i in range(0, floor(sqrt(c / 2)) + 1):
            j = floor(sqrt(c - i**2))
            if i**2 + j**2 == c:
                return True
        return False
