class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        s_t, t_s = {}, {}
        for ss, tt in zip(s, t):
            if ss not in s_t and tt not in t_s:
                s_t[ss] = tt
                t_s[tt] = ss
            elif ss in s_t and tt in t_s:
                if tt != s_t[ss] or ss != t_s[tt]:
                    return False
            else:
                return False
        return True
