invalid_digits = set([3, 4, 7])
changed_digits = set([2, 5, 6, 9])


class Solution:
    def rotatedDigits(self, n: int) -> int:
        ret = 0
        for i in range(1, n + 1):
            invalid, changed = False, False
            while i > 0:
                digit = i % 10
                if digit in invalid_digits:
                    invalid = True
                    break
                if digit in changed_digits:
                    changed = True
                i //= 10
            if not invalid and changed:
                ret += 1
        return ret
