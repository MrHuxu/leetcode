class Solution:
    def numTeams(self, rating: List[int]) -> int:
        ret = 0
        n = len(rating)
        bigger_cnt, smaller_cnt = [0] * n, [0] * n
        for i in range(n):
            for j in range(0, i):
                if rating[j] > rating[i]:
                    ret += bigger_cnt[j]
                    bigger_cnt[i] += 1
                else:
                    ret += smaller_cnt[j]
                    smaller_cnt[i] += 1
        return ret
