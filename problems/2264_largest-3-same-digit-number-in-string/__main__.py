class Solution:
    def largestGoodInteger(self, num: str) -> str:
        largest = -1
        for i in range(len(num) - 2):
            if not (num[i] == num[i + 1] and num[i + 1] == num[i + 2]):
                continue
            largest = max(int(num[i]), largest)
        return "" if largest == -1 else str(largest) * 3
