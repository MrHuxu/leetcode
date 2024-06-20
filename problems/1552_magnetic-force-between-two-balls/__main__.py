class Solution:
    def maxDistance(self, position: List[int], m: int) -> int:
        position.sort()

        def validate(distance):
            next_pos, cnt = 0, 0
            for pos in position:
                if pos >= next_pos:
                    next_pos = pos + distance
                    cnt += 1
                    if cnt == m:
                        return True
            return False

        ret, left, right = 0, 1, (position[-1] - position[0]) // (m - 1)
        while left <= right:
            mid = (right + left) // 2
            if validate(mid):
                ret = mid
                left = mid + 1
            else:
                right = mid - 1
        return ret
