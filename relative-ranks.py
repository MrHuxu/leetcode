from typing import List


class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        score_copy = score[:]
        score.sort(reverse=True)
        label = {}
        for i in range(len(score)):
            if i == 0:
                label[score[i]] = "Gold Medal"
            elif i == 1:
                label[score[i]] = "Silver Medal"
            elif i == 2:
                label[score[i]] = "Bronze Medal"
            else:
                label[score[i]] = str(i + 1)
        return [label[s] for s in score_copy]


print(Solution().findRelativeRanks([5, 4, 3, 2, 1]))
print(Solution().findRelativeRanks([10, 3, 8, 9, 4]))
