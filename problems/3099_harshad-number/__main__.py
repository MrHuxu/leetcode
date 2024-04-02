class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:
        digit_sum, tmp = 0, x
        while tmp > 0:
            digit_sum += tmp % 10
            tmp //= 10
        return -1 if x % digit_sum else digit_sum


print(Solution().sumOfTheDigitsOfHarshadNumber(18))
print(Solution().sumOfTheDigitsOfHarshadNumber(23))
