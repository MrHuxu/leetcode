class Solution:
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        cnts = sorted(Counter(arr).items(), key=lambda x: x[1])
        ret = len(cnts)
        for cnt in cnts:
            k -= cnt[1]
            if k >= 0:
                ret -= 1
            else:
                break
        return ret