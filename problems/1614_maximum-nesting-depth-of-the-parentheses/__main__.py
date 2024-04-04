class Solution:
    def maxDepth(self, s: str) -> int:
        stack = []
        for ch in s:
            if ch not in {"(", ")"}:
                continue
            if ch == "(":
                stack.append(ch)
                continue
            depth = 0
            while stack:
                last = stack.pop()
                if last == "(":
                    break
                depth = max(depth, last)
            stack.append(depth + 1)
        return max(stack) if stack else 0
