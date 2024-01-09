VOWELS = set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])


class Solution:
    def sortVowels(self, s: str) -> str:
        vowels = []
        for ch in s:
            if ch in VOWELS:
                vowels.append(ch)
        vowels.sort()
        ret = [""] * len(s)
        for i, ch in enumerate(s):
            if ch in VOWELS:
                ret[i] = vowels.pop(0)
            else:
                ret[i] = ch
        return "".join(ret)


solution = Solution()
print(solution.sortVowels("lEetcOde"))
