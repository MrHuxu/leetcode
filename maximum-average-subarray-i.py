class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        accu = list(accumulate(nums))
        ret = accu[k - 1] / k
        for i in range(k, len(accu)):
            ret = max(ret, (accu[i] - accu[i - k]) / k)
        return ret
