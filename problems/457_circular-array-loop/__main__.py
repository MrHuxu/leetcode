from typing import List


class Solution:
    def circularArrayLoop(self, nums: List[int]) -> bool:
        n, visited = len(nums), set()
        for i in range(n):
            if n in visited:
                continue

            curr, length, same_direction, sub_visited = i, 0, True, set()
            while curr not in sub_visited:
                sub_visited.add(curr)
                length += 1
                next_index = (curr + nums[curr]) % n
                if next_index == curr:
                    length = 0
                    break
                if nums[curr] * nums[next_index] < 0:
                    same_direction = False
                    break
                curr = next_index
            if length > 0 and same_direction:
                return True
            visited.update(sub_visited)
        return False


print(Solution().circularArrayLoop([2, -1, 1, 2, 2]))
print(Solution().circularArrayLoop(nums=[-1, -2, -3, -4, -5, 6]))
print(Solution().circularArrayLoop(nums=[1, -1, 5, 1, 4]))
print(Solution().circularArrayLoop([-1, -2, -3, -4, -5]))
