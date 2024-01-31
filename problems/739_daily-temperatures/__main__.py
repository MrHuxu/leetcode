from typing import List


class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack, ret = [], [0] * len(temperatures)
        for i in range(len(temperatures)):
            while stack and temperatures[stack[-1]] < temperatures[i]:
                idx = stack.pop()
                ret[idx] = i - idx
            stack.append(i)
        return ret


solution = Solution()
print(solution.dailyTemperatures(temperatures=[73, 74, 75, 71, 69, 72, 76, 73]))
