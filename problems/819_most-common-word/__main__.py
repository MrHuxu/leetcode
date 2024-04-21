class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        banned = set(banned)
        cnt, pre_pos = {}, -1
        for i, ch in enumerate(paragraph):
            if ord("a") <= ord(ch) <= ord("z") or ord("A") <= ord(ch) <= ord("Z"):
                if pre_pos == -1:
                    pre_pos = i
            elif pre_pos != -1:
                word = paragraph[pre_pos:i].lower()
                pre_pos = -1
                if word not in banned:
                    cnt[word] = cnt.get(word, 0) + 1
        if pre_pos != -1:
            word = paragraph[pre_pos:].lower()
            cnt[word] = cnt.get(word, 0) + 1
        return max((v, k) for k, v in cnt.items())[1]
