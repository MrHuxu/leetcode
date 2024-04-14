class Solution:
    def findLatestTime(self, s: str) -> str:
        ret = [""] * 5
        ret[2] = ":"
        if s[0] == "?":
            ret[0] = "1" if s[1] == "?" or s[1] == "0" or s[1] == "1" else "0"
        else:
            ret[0] = s[0]

        if s[1] == "?":
            ret[1] = "9" if ret[0] == "0" else "1"
        else:
            ret[1] = s[1]

        ret[3] = "5" if s[3] == "?" else s[3]
        ret[4] = "9" if s[4] == "?" else s[4]

        return "".join(ret)


print(Solution().findLatestTime("1?:?4"))
print(Solution().findLatestTime("0?:5?"))
print(Solution().findLatestTime("??:??"))
