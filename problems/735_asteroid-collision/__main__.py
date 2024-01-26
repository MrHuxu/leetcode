from typing import List


class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack: List[int] = []
        for asteroid in asteroids:
            if asteroid > 0:
                stack.append(asteroid)
                continue

            while stack and stack[-1] > 0:
                if stack[-1] < -asteroid:
                    stack.pop()
                else:
                    break

            if not stack or stack[-1] < 0:
                stack.append(asteroid)
            elif stack[-1] == -asteroid:
                stack.pop()
            else:
                continue
        return stack


solution = Solution()
print(solution.asteroidCollision([5, 10, -5]))
print(solution.asteroidCollision([8, -8]))
print(solution.asteroidCollision([10, 2, -5]))
print(solution.asteroidCollision([-2, -1, 1, 2]))
