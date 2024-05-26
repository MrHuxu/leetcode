class Solution:
    def compressedString(self, word: str) -> str:
        ret = ""
        curr_ch, curr_cnt = "", 0
        for i, ch in enumerate(word):
            if curr_ch == "":
                curr_ch = ch
                curr_cnt = 1
            elif ch != curr_ch:
                if curr_cnt > 0:
                    ret += str(curr_cnt) + curr_ch
                curr_ch = ch
                curr_cnt = 1
            else:
                curr_cnt += 1
                if curr_cnt == 9:
                    ret += str(curr_cnt) + curr_ch
                    curr_cnt = 0
        return ret + str(curr_cnt) + curr_ch if curr_cnt > 0 else ret


print(Solution().compressedString("abcde"))
print(Solution().compressedString("aaaaaaaaaaaaaabb"))
print(Solution().compressedString("aaaaaaaaay"))
print(Solution().compressedString("a"))
print(Solution().compressedString("aaaaaaaaa"))
