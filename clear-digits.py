class Solution:
    def clearDigits(self, s: str) -> str:
        char_ids, remove_char_ids = [], set()
        for i, ch in enumerate(s):
            if ch.isalpha():
                char_ids.append(i)
            else:
                remove_char_ids.add(char_ids.pop())
        return "".join(
            ch for i, ch in enumerate(s) if ch.isalpha() and i not in remove_char_ids
        )

print(Solution().clearDigits('abc'))
print(Solution().clearDigits('cb34'))
