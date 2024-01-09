class Solution:
    def findMatrix(self, nums: List[int]) -> List[List[int]]:
        cnt = {}
        max_cnt = 0
        for num in nums:
            cnt[num] = cnt.get(num, 0) + 1
            max_cnt = max(max_cnt, cnt[num])
        ret = [[] for _ in range(max_cnt)]
        for n, c in cnt.items():
            for i in range(c):
                ret[i].append(n)
        return ret