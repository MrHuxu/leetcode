from typing import List


class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        ret = 0
        i, j,  count_t = 0, 0, 0
        n = len(answerKey)
        while j < n:
            if answerKey[j] == 'T':
                count_t += 1

            if count_t > k:
                while answerKey[i] == 'F':
                    i += 1
                i += 1
                count_t -= 1

            ret = max(ret, j - i + 1)
            j += 1
        i, j, count_f = 0, 0, 0
        while j < n:
            if answerKey[j] == 'F':
                count_f += 1

            if count_f > k:
                while answerKey[i] == 'T':
                    i += 1
                i += 1
                count_f -= 1

            ret = max(ret, j - i + 1)
            j += 1
        return ret


solution = Solution()
print(solution.maxConsecutiveAnswers("TTFF", 2))
print(solution.maxConsecutiveAnswers("TFFT", 1))
print(solution.maxConsecutiveAnswers("TTFTTFTT", 1))
