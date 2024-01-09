from typing import List


class Solution:
    def buildArray(self, target: List[int], n: int) -> List[str]:
        ret = []
        idx = 0
        for i in range(1, n + 1):
            if idx == len(target):
                break

            ret.append("Push")
            if i == target[idx]:
                idx += 1
            else:
                ret.append("Pop")
        return ret


solution = Solution()
print(solution.buildArray([1, 3], 3))
print(solution.buildArray([1, 2, 3], 3))
print(solution.buildArray([1, 2], 4))
