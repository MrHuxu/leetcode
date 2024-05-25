from typing import List


class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        n, word_set = len(s), set(wordDict)

        def dfs(idx: int) -> List[str]:
            if idx == n:
                return [""]
            ret = []
            for i in range(idx, n):
                curr = s[idx : i + 1]
                if curr in word_set:
                    for next_ in dfs(i + 1):
                        ret.append(curr if not next_ else curr + " " + next_)
            return ret

        return dfs(0)


print(
    Solution().wordBreak(s="catsanddog", wordDict=["cat", "cats", "and", "sand", "dog"])
)
print(
    Solution().wordBreak(
        s="pineapplepenapple",
        wordDict=["apple", "pen", "applepen", "pine", "pineapple"],
    )
)
print(
    Solution().wordBreak(s="catsandog", wordDict=["cats", "dog", "sand", "and", "cat"])
)
