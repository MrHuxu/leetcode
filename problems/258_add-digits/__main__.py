class Solution:
    def addDigits(self, num: int) -> int:
        if num < 10:
            return num
        sum = 0
        while num:
            sum += num % 10
            num //= 10
        return self.addDigits(sum)


print(Solution().addDigits(38))
