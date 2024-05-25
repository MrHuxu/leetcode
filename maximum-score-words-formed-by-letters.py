from typing import List


class Solution:
    def maxScoreWords(
        self, words: List[str], letters: List[str], score: List[int]
    ) -> int:

        word_infos = [({}, 0) for _ in range(len(words))]
        for i, word in enumerate(words):
            cnt, sc = {}, 0
            for ch in word:
                cnt[ord(ch) - ord("a")] = cnt.get(ord(ch) - ord("a"), 0) + 1
                sc += score[ord(ch) - ord("a")]
            word_infos[i] = (cnt, sc)
        # print(word_infos)

        def helper(idx: int, remaining: List[int]) -> int:
            if idx == len(words):
                return 0
            ret = 0
            for i in range(idx, len(words)):
                if all(remaining[ch] >= v for ch, v in word_infos[i][0].items()):
                    for ch, v in word_infos[i][0].items():
                        remaining[ch] -= v
                    ret = max(ret, word_infos[i][1] + helper(i + 1, remaining))
                    for ch, v in word_infos[i][0].items():
                        remaining[ch] += v

            return ret

        remaining = [0] * 26
        for letter in letters:
            remaining[ord(letter) - ord("a")] += 1

        return helper(0, remaining)


print(
    Solution().maxScoreWords(
        words=["dog", "cat", "dad", "good"],
        letters=["a", "a", "c", "d", "d", "d", "g", "o", "o"],
        score=[
            1,
            0,
            9,
            5,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ],
    )
)
print(
    Solution().maxScoreWords(
        words=["xxxz", "ax", "bx", "cx"],
        letters=["z", "a", "b", "c", "x", "x", "x"],
        score=[
            4,
            4,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            0,
            10,
        ],
    )
)
print(
    Solution().maxScoreWords(
        words=["leetcode"],
        letters=["l", "e", "t", "c", "o", "d"],
        score=[
            0,
            0,
            1,
            1,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
        ],
    )
)