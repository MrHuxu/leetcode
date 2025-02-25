from typing import List
from itertools import accumulate


class Solution:
    def vowelStrings(self, words: List[str], queries: List[List[int]]) -> List[int]:
        accu = [0] + list(
            accumulate(
                [
                    1 if word[0] in "aeiou" and word[-1] in "aeiou" else 0
                    for word in words
                ]
            )
        )
        return [accu[j + 1] - accu[i] for i, j in queries]


print(
    Solution().vowelStrings(
        words=["aba", "bcb", "ece", "aa", "e"], queries=[[0, 2], [1, 4], [1, 1]]
    )
)
print(Solution().vowelStrings(words=["a", "e", "i"], queries=[[0, 2], [0, 1], [2, 2]]))
