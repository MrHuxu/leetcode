class Solution:
    def smallestNumber(self, pattern: str) -> str:
        curr, count_d = 1, 0
        ret = [0] * (len(pattern) + 1)
        for i, ch in enumerate(pattern):
            if ch == "I":
                ret[i] = curr
                curr += 1
                for j in range(count_d):
                    ret[i - 1 - j] = curr
                    curr += 1
                count_d = 0
            else:
                count_d += 1
        for i in range(count_d + 1):
            ret[len(pattern) - i] = curr
            curr += 1

        return "".join(str(num) for num in ret)


"""
Input: pattern = "IIIDIDDD"
Output: "123549876"
"""
print(Solution().smallestNumber("IIIDIDDD"))
print(Solution().smallestNumber("DDD"))
