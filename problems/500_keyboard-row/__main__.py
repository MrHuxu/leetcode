class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        ch_line = {
            ch: i
            for i, line in enumerate(["qwertyuiop", "asdfghjkl", "zxcvbnm"])
            for ch in line
        }
        return [
            word
            for word in words
            if len(Counter([ch_line[ch] for ch in word.lower()])) == 1
        ]
