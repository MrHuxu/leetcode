class Solution:
    def integerBreak(self, n: int) -> int:
        ret = 0
        for k in range(2, n + 1):
            avg, extra = n // k, n % k
            product = 1
            for _ in range(k):
                if extra > 0:
                    product = product * (avg + 1)
                    extra -= 1
                else:
                    product = product * avg
            if product > ret:
                ret = product
            else:
                break
        return ret