class Solution:
    def magicalString(self, n: int) -> int:
        ret, s, occ, occ_curr_idx, occ_last_idx = 0, "", [0] * 100000, 0, 0
        while True:
            ch = "1" if not s else ("1" if s[-1] == "2" else "2")
            # print(ch, s, occ[:6], occ_curr_idx, occ_last_idx)
            s += ch
            occ[occ_last_idx] = 1 if ch == "1" else 2
            occ_last_idx += 1
            if ch == "1":
                ret += 1
            if len(s) >= n:
                break

            if occ[occ_curr_idx] == 2:
                s += ch
                occ[occ_last_idx] = 1 if ch == "1" else 2
                occ_last_idx += 1
                if ch == "1":
                    ret += 1
                if len(s) >= n:
                    break

            occ_curr_idx += 1
        print(s)
        return Counter(s)["1"]
