class Solution:
    def makeEqual(self, words: List[str]) -> bool:
        n, total, cnt = len(words), 0, {}
        for word in words:
            total += len(word)
            for ch in word:
                cnt[ch] = cnt.get(ch, 0) + 1
        if total % n != 0:
            return False
        for v in cnt.values():
            if v % n != 0:
                return False
        return True
                