class Solution:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
        lost_cnt, cnt_player = {}, {}
        for winner, loser in matches:
            if winner not in lost_cnt:
                lost_cnt[winner] = 0
                cnt_player.setdefault(0, set()).add(winner)

            pre_cnt = 0
            if loser in lost_cnt:
                pre_cnt = lost_cnt[loser]
                cnt_player[pre_cnt].remove(loser)
            lost_cnt[loser] = pre_cnt + 1
            cnt_player.setdefault(pre_cnt + 1, set()).add(loser)
        return [
            sorted(list(cnt_player.get(0, set()))),
            sorted(list(cnt_player.get(1, set()))),
        ]
