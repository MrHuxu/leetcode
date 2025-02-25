vowels = set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])


class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        return sum(1 for ch in s[: len(s) // 2] if ch in vowels) == sum(
            1 for ch in s[len(s) // 2 :] if ch in vowels
        )
