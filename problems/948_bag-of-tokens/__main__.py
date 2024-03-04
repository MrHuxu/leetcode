from typing import List


class Solution:
    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
        tokens.sort()
        left, right = 0, len(tokens) - 1
        ret, score = 0, 0
        while left <= right:
            if power >= tokens[left]:
                power -= tokens[left]
                score += 1
                left += 1
            elif score > 0:
                power += tokens[right]
                score -= 1
                right -= 1
            else:
                break
            ret = max(ret, score)
        return ret


print(Solution().bagOfTokensScore([100], 50))
print(Solution().bagOfTokensScore([200, 100], 150))
print(Solution().bagOfTokensScore(tokens=[100, 200, 300, 400], power=200))
