class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        cnt = [-1] * 26
        for word in words:
            counter = Counter(word)
            for i, c in enumerate(cnt):
                ch = chr(ord("a") + i)
                if cnt[i] == -1:
                    cnt[i] = counter.get(ch, 0)
                else:
                    cnt[i] = min(cnt[i], counter.get(ch, 0))
        ret = []
        for i, c in enumerate(cnt):
            ch = chr(ord("a") + i)
            for _ in range(c):
                ret.append(ch)
        return ret
