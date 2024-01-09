from typing import Dict, List


class Solution:
    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
        groups: Dict[int, List[List[int]]] = {}
        for i, groupSize in enumerate(groupSizes):
            if groupSize not in groups:
                groups[groupSize] = [[]]
            if len(groups[groupSize][-1]) < groupSize:
                groups[groupSize][-1].append(i)
            else:
                groups[groupSize].append([i])
        return [item for group in groups.values() for item in group]


solution = Solution()
print(solution.groupThePeople([3, 3, 3, 3, 3, 1, 3]))
print(solution.groupThePeople([2, 1, 3, 3, 3, 2]))
