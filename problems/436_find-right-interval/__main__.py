class Solution:
    def findRightInterval(self, intervals: List[List[int]]) -> List[int]:
        n = len(intervals)
        ret = [-1] * n
        arr = sorted([(interval[0], interval[1], i) for i, interval in enumerate(intervals)])
        for i, data in enumerate(arr):
            _, end_i, idx_i = data
            for j in range(i, n):
                start_j, _, idx_j = arr[j]
                if start_j >= end_i:
                    ret[idx_i] = idx_j
                    break
        return ret


