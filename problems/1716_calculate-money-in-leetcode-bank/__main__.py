class Solution:
    def totalMoney(self, n: int) -> int:
        return (
            28 * (n // 7)
            + (0 + 7 * (n // 7 - 1)) * (n // 7) // 2
            + ((1 + n // 7) * 2 + n % 7 - 1) * (n % 7) // 2
        )
