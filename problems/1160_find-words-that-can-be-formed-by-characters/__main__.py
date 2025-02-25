class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        cnt = {}
        for char in chars:
            cnt[char] = cnt.get(char, 0) + 1
        ret = 0
        for word in words:
            word_cnt = {}
            for ch in word:
                word_cnt[ch] = word_cnt.get(ch, 0) + 1
            if all(cnt.get(k, 0) >= v for k, v in word_cnt.items()):
                ret += len(word)
        return ret
