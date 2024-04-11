class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        if k >= len(num):
            return "0"

        stack = []
        for ch in num:
            if not stack or not k:
                stack.append(ch)
                continue

            while stack and ord(stack[-1]) > ord(ch) and k:
                stack.pop()
                k -= 1

            stack.append(ch)

        while k:
            stack.pop()
            k -= 1

        while stack and stack[0] == "0":
            stack.pop(0)

        return "".join(stack) if stack else "0"
