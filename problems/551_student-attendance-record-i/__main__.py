class Solution:
    def checkRecord(self, s: str) -> bool:
        a_cnt, l_cnt = 0, 0
        for ch in s:
            if ch == "L":
                l_cnt += 1
            else:
                l_cnt = 0
                if ch == "A":
                    a_cnt += 1
            if l_cnt >= 3 or a_cnt >= 2:
                return False
        return True
