from typing import List


class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        count = [0] * 26
        for ch in s:
            count[ord(ch) - ord('a')] += 1

        stack: List[str] = []
        used = [False] * 26
        for ch in s:
            if used[ord(ch) - ord('a')]:
                count[ord(ch) - ord('a')] -= 1
                continue

            while True:
                if not stack:
                    break

                if ord(ch) < ord(stack[-1]) and count[ord(stack[-1]) - ord('a')] > 0:
                    used[ord(stack[-1]) - ord('a')] = False
                    stack.pop()
                else:
                    break
            
            stack.append(ch)
            count[ord(ch) - ord('a')] -= 1
            used[ord(ch) - ord('a')] = True
        
        return ''.join(stack)