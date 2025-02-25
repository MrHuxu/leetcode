class Solution:
    def findNthDigit(self, n: int) -> int:
        if n < 10:
            return n
        c, l = 0, 1
        while c < n:
            tmp = 9 * (10 ** (l - 1)) * l
            c += tmp
            if c >= n:
                break
            l, n = l + 1, n - tmp
        num, n = n // l - 1 + 10 ** (l - 1), n % l
        return int(str(num)[-1] if n == 0 else str(num + 1)[n - 1])
