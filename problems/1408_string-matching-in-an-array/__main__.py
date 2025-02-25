from typing import List


class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        words.sort(key=lambda x: -len(x))
        ret = []
        for i, word in enumerate(words):
            for j in range(i):
                if word in words[j]:
                    ret.append(word)
                    break
        return ret


print(Solution().stringMatching(words=["mass", "as", "hero", "superhero"]))
print(Solution().stringMatching(["leetcode", "et", "code"]))
print(Solution().stringMatching(words=["blue", "green", "bu"]))
