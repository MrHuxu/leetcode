class Solution:
    def numSteps(self, s: str) -> int:
        ret = 0
        num_of_1 = 0
        for i in reversed(range(len(s))):
            if s[i] == "1":
                num_of_1 += 1
            else:
                ret += 1 + num_of_1
                if num_of_1 != 0:
                    num_of_1 = 1
        if num_of_1 != 1:
            ret += num_of_1 + 1
        return ret
