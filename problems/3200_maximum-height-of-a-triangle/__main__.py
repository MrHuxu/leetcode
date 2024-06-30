class Solution:
    def maxHeightOfTriangle(self, red: int, blue: int) -> int:
        def helper(red, blue, cnt, flag):
            if flag:
                if red < cnt:
                    return 0
                else:
                    return helper(red - cnt, blue, cnt + 1, False) + 1
            else:
                if blue < cnt:
                    return 0
                else:
                    return helper(red, blue - cnt, cnt + 1, True) + 1

        return max(helper(red, blue, 1, False), helper(red, blue, 1, True))


print(Solution().maxHeightOfTriangle(2, 4))
print(Solution().maxHeightOfTriangle(2, 1))
print(Solution().maxHeightOfTriangle(1, 1))
print(Solution().maxHeightOfTriangle(10, 1))
