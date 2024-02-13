class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        return next((word for word in words if self.isPalindrome(word)), '')
    
    def isPalindrome(self, word: str) -> bool:
        left, right = 0, len(word) - 1
        while left < right:
            if word[left] != word[right]:
                return False
            left += 1
            right -= 1
        return True