class Solution:
    def arrayNesting(self, nums: List[int]) -> int:
        ret = 0
        visited = set()
        for i in range(len(nums)):
            if i in visited:
                continue
            tmp, sub_visited = i, set()
            while tmp not in sub_visited:
                sub_visited.add(tmp)
                tmp = nums[tmp]
            visited.update(sub_visited)
            ret = max(ret, len(sub_visited))
        return ret
