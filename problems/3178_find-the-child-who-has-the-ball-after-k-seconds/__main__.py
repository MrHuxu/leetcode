class Solution:
    def numberOfChild(self, n: int, k: int) -> int:
        idx, direction = 0, True
        for i in range(k):
            if direction:
                idx += 1
                if idx == n - 1:
                    direction = False
            else:
                idx -= 1
                if idx == 0:
                    direction = True
        return idx


print(Solution().numberOfChild(3, 5))
print(Solution().numberOfChild(5, 6))
print(Solution().numberOfChild(4, 2))
