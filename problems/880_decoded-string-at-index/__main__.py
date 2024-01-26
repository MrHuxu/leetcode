class Solution:
    def decodeAtIndex(self, s: str, k: int) -> str:
        lengths = [0] * len(s)
        for i, ch in enumerate(s):
            lengths[i] = (
                lengths[i - 1] + 1 if ch.isalpha() else lengths[i - 1] * int(ch)
            )
        # print(lengths)
        for i in reversed(range(len(s))):
            # print(i, k)
            if lengths[i] > k:
                continue
            elif lengths[i] < k:
                if k % lengths[i] == 0:
                    while s[i].isdigit():
                        i -= 1
                    return s[i]
                else:
                    k = k % lengths[i]
            else:
                while s[i].isdigit():
                    i -= 1
                return s[i]
        return ""


solution = Solution()
print(solution.decodeAtIndex("m26559vishxq9b726mrj", 2022213))
print(solution.decodeAtIndex("vk6u5xhq9v", 554))
print(solution.decodeAtIndex("a23", 6))
print(solution.decodeAtIndex("leet2code3", 10))
print(solution.decodeAtIndex("ha22", 5))
print(solution.decodeAtIndex("a2345678999999999999999", 1))
