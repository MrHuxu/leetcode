class Solution:
    def reverseWords(self, s: str) -> str:
        return " ".join([ss[::-1] for ss in s.split(" ")])
