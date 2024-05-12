class Solution:
    def maximumEnergy(self, energy: List[int], k: int) -> int:
        n = len(energy)
        ret = None
        for i in range(k):
            sum = 0
            for j in range(n - 1 - i, -1, -k):
                sum += energy[j]
                ret = sum if ret is None else max(ret, sum)
        return ret