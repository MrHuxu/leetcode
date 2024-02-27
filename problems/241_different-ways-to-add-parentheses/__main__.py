from typing import List


class Solution:
    def diffWaysToCompute(self, expression: str) -> List[int]:
        arr, pre_idx = [], 0
        for i, e in enumerate(expression):
            if e in "+-*":
                arr.append(int(expression[pre_idx:i]))
                arr.append(e)
                pre_idx = i + 1
        arr.append(int(expression[pre_idx:]))
        # print(arr)
        return self.helper(arr)

    def helper(self, arr) -> List[int]:
        if len(arr) == 1:
            return [arr[0]]
        if len(arr) == 3:
            return [self.calc(arr[0], arr[2], arr[1])]

        ret = []
        for i in range(1, len(arr), 2):
            left, right = self.helper(arr[:i]), self.helper(arr[i + 1 :])
            for l in left:
                for r in right:
                    ret.append(self.calc(l, r, arr[i]))
        return ret

    def calc(self, num1, num2, op):
        if op == "+":
            return num1 + num2
        elif op == "-":
            return num1 - num2
        else:
            return num1 * num2


solution = Solution()
print(solution.diffWaysToCompute("2-1-1"))
print(solution.diffWaysToCompute("2*3-4*5"))
