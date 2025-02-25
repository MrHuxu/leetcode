class Solution:
    def canChange(self, start: str, target: str) -> bool:
        if start.replace("_", "") != target.replace("_", ""):
            return False

        n = len(start)

        cnt_l = 0
        for i in range(n):
            if target[i] == "L":
                cnt_l += 1
            if start[i] == "L":
                cnt_l -= 1
            if cnt_l < 0 or (start[i] == "R" and cnt_l):
                return False
        if cnt_l:
            return False

        cnt_r = 0
        for i in reversed(range(n)):
            if target[i] == "R":
                cnt_r += 1
            if start[i] == "R":
                cnt_r -= 1

            if cnt_r < 0 or (start[i] == "L" and cnt_r):
                return False
        if cnt_r:
            return False

        return True


print(Solution().canChange(start="_L__R__R_", target="L______RR"))
print(Solution().canChange(start="R_L_", target="__LR"))
print(Solution().canChange(start="R__L", target="_LR_"))
print(Solution().canChange(start="_R", target="R_"))
