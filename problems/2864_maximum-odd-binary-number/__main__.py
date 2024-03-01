class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        counter = Counter(s)
        return '1' * (counter['1'] - 1) + '0' * counter['0'] + '1'