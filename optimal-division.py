from typing import List


class Solution:
    def optimalDivision(self, nums: List[int]) -> str:
        stack, ret_stack = [], []
        for num in nums:
            if not stack:
                stack.append(num)
                ret_stack.append(str(num))
                continue
            if (
                len(stack) == 1
                or stack[-2] * num / stack[-1] <= stack[-2] / stack[-1] / num
            ):
                stack.append(num)
                ret_stack.append("/")
                ret_stack.append(str(num))
                continue

            tmp = stack[-2] * num / stack[-1]
            stack.pop()
            stack.append(tmp)

            last = ret_stack.pop()
            if last[-1] == ")":
                last = last[:-1] + "/" + str(num) + ")"
            else:
                last = "(" + last + "/" + str(num) + ")"
            ret_stack.append(last)
        return "".join(ret_stack)


print(Solution().optimalDivision(nums=[1000, 100, 10, 2]))
print(Solution().optimalDivision(nums=[2, 3, 4]))
