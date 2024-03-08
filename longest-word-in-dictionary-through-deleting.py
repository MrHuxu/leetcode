class Solution:
    def findLongestWord(self, s: str, dictionary: List[str]) -> str:
        ret = ""
        for word in dictionary:
            if len(word) < len(ret):
                continue
            match = self.find(s, word)
            if not match:
                continue
            if len(word) > len(ret) or word < ret:
                ret = word
        return ret

    def find(self, s: str, word: str) -> bool:
        i = 0
        for c in s:
            if c == word[i]:
                i += 1
            if i == len(word):
                return True
        return False
