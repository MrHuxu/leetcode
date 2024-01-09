class Solution:
    def minCost(self, colors: str, neededTime: List[int]) -> int:
        ret, prev_idx = 0, 0
        for i in range(1, len(colors)):
            if colors[i] != colors[prev_idx]:
                prev_idx = i
            else:
                if neededTime[i] < neededTime[prev_idx]:
                    ret += neededTime[i]
                else:
                    ret += neededTime[prev_idx]
                    prev_idx = i
        return ret