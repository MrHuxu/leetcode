class Solution:
    def isReachableAtTime(self, sx: int, sy: int, fx: int, fy: int, t: int) -> bool:
        abs_dis_x, abs_dis_y = abs(fx - sx), abs(fy - sy)
        if abs_dis_x == 0 and abs_dis_y == 0 and t == 1:
            return False
        return max(abs_dis_x, abs_dis_y) <= t


solution = Solution()
print(solution.isReachableAtTime(sx=2, sy=4, fx=7, fy=7, t=6))
print(solution.isReachableAtTime(sx=3, sy=1, fx=7, fy=3, t=3))
print(solution.isReachableAtTime(1, 2, 1, 2, 1))
print(solution.isReachableAtTime(1, 1, 1, 1, 3))
