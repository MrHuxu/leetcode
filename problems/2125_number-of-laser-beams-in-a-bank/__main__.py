class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        ret, pre = 0, -1
        for row in bank:
            cnt_1 = Counter(row)["1"]
            if cnt_1 == 0:
                continue
            if pre == -1:
                pre = cnt_1
                continue

            ret += pre * cnt_1
            pre = cnt_1
        return ret
