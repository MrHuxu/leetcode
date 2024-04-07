class Solution:
    def checkValidString(self, s: str) -> bool:
        stack1, stack2 = [], []
        for i, ch in enumerate(s):
            if ch == "(":
                stack1.append(i)
            elif ch == "*":
                stack2.append(i)
            else:
                if stack1:
                    stack1.pop()
                elif stack2:
                    stack2.pop()
                else:
                    return False
        while stack1:
            if stack2 and stack2[-1] > stack1[-1]:
                stack2.pop()
                stack1.pop()
            else:
                break
        return not stack1
