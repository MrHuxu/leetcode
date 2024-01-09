from typing import Dict, List


class Solution:
    def garbageCollection(self, garbage: List[str], travel: List[int]) -> int:
        cnt: List[Dict[str, int]] = [{}] * len(garbage)
        remaining: Dict[str, int] = {"M": 0, "P": 0, "G": 0}
        for i, g in enumerate(garbage):
            cnt_m, cnt_p, cnt_g = 0, 0, 0
            for ch in g:
                if ch == "M":
                    cnt_m += 1
                elif ch == "P":
                    cnt_p += 1
                elif ch == "G":
                    cnt_g += 1
            cnt[i] = {"M": cnt_m, "P": cnt_p, "G": cnt_g}
            remaining["M"] += cnt_m
            remaining["P"] += cnt_p
            remaining["G"] += cnt_g

        ret = 0
        for ch in ["M", "P", "G"]:
            for i in range(len(garbage)):
                ret += cnt[i][ch]

                remaining[ch] -= cnt[i][ch]
                if remaining[ch] != 0:
                    ret += travel[i]
                else:
                    break
        return ret


solution = Solution()
print(solution.garbageCollection(["G", "P", "GP", "GG"], [2, 4, 3]))
print(solution.garbageCollection(["MMM", "PGM", "GP"], [3, 10]))
