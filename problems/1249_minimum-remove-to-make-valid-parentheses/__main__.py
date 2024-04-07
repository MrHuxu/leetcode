class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        stack = []
        for i, ch in enumerate(s):
            if ch == "(":
                stack.append(i)
            elif ch == ")":
                if stack and s[stack[-1]] == "(":
                    stack.pop()
                else:
                    stack.append(i)
        remove_idx = set(stack)
        return "".join([ch for i, ch in enumerate(s) if i not in remove_idx])
