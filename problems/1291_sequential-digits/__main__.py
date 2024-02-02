from typing import List, Tuple


class Solution:
    def sequentialDigits(self, low: int, high: int) -> List[int]:
        length, digit = self.get_length_highest_digit(low)
        if digit + length > 10:
            digit = 1
            length += 1

        ret = []
        while True:
            num = self.get_num(0, digit, length)
            if num > high:
                break
            if num >= low:
                ret.append(num)

            if digit + length > 9:
                digit = 1
                length += 1
            else:
                digit += 1
        return ret

    def get_length_highest_digit(self, num: int) -> Tuple[int, int]:
        if num < 10:
            return 1, num
        l, d = self.get_length_highest_digit(num // 10)
        return 1 + l, d

    def get_num(self, high: int, digit: int, length: int) -> int:
        if length == 1:
            return high * 10 + digit
        return self.get_num(high * 10 + digit, digit + 1, length - 1)


solution = Solution()
print(solution.sequentialDigits(100, 300))
print(solution.sequentialDigits(1000, 13000))
