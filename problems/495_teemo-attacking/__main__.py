class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        ret = 0
        start, end = timeSeries[0], timeSeries[0] + duration - 1
        for t in timeSeries[1:]:
            if t <= end:
                end = t + duration - 1
            else:
                ret += end - start + 1
                start, end = t, t + duration - 1
        ret += end - start + 1
        return ret
