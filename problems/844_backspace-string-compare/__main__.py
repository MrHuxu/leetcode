class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        stack_s, stack_t = [], []
        for ch in s:
            if ch == "#" and stack_s:
                stack_s.pop()
            elif ch != "#":
                stack_s.append(ch)
        for ch in t:
            if ch == "#" and stack_t:
                stack_t.pop()
            elif ch != "#":
                stack_t.append(ch)
        return "".join(stack_s) == "".join(stack_t)
