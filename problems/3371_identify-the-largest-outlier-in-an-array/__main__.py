from typing import List


class Solution:
    def getLargestOutlier(self, nums: List[int]) -> int:
        sum, cnt = 0, {}
        for num in nums:
            sum += num
            cnt[num] = cnt.get(num, 0) + 1

        for num in sorted(set(nums), reverse=True):
            tmp = sum - num
            if tmp % 2:
                continue

            cnt[num] -= 1
            if cnt.get(tmp // 2, 0):
                return num
            cnt[num] += 1
        return -1


print(Solution().getLargestOutlier(nums=[2, 3, 5, 10]))
print(Solution().getLargestOutlier(nums=[1, 1, 1, 1, 1, 5, 5]))
print(Solution().getLargestOutlier(nums=[-2, -1, -3, -6, 4]))
