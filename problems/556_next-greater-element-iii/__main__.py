class Solution:
    def nextGreaterElement(self, n: int) -> int:
        digits = [int(ch) for ch in str(n)]
        i = len(digits) - 2
        while i >= 0 and digits[i] >= digits[i + 1]:
            i -= 1
        if i < 0:
            return -1
        bigger_val, j = -1, i + 1
        for ii in range(i + 1, len(digits)):
            if digits[ii] <= digits[i]:
                continue
            if bigger_val == -1 or digits[ii] <= bigger_val:
                j = ii
                bigger_val = digits[ii]
        # print(i, j, digits)
        digits[i], digits[j] = digits[j], digits[i]
        digits = digits[: i + 1] + sorted(digits[i + 1 :])
        num = int("".join(str(d) for d in digits))
        return num if 1 <= num <= 2**31 - 1 else -1
