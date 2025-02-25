class Solution:
    def hasSameDigits(self, s: str) -> bool:
        digits = [ord(ch) - ord("0") for ch in s]
        while len(digits) > 2:
            new_digits = []
            for i in range(len(digits) - 1):
                new_digits.append((digits[i] + digits[i + 1]) % 10)
            digits = new_digits
        return digits[0] == digits[1]


print(Solution().hasSameDigits("3902"))
print(Solution().hasSameDigits("34788"))
