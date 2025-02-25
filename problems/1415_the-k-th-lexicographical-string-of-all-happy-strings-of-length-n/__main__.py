class Solution:
    def getHappyString(self, n: int, k: int) -> str:
        strs = []

        def dfs(s):
            if len(strs) >= k:
                return
            if len(s) == n:
                strs.append(s)
                return
            for ch in "abc":
                if not s or s[-1] != ch:
                    dfs(s + ch)

        dfs("")
        return strs[k - 1] if len(strs) >= k else ""


print(Solution().getHappyString(1, 3))
print(Solution().getHappyString(1, 4))
print(Solution().getHappyString(3, 9))
