class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return False if len(s) != len(t) else Counter(s) == Counter(t)
