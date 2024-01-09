from typing import Dict, List, Set


class Solution:
    def restoreArray(self, adjacentPairs: List[List[int]]) -> List[int]:
        outdegrees: Dict[int, Set[int]] = {}
        for pair in adjacentPairs:
            outdegrees.setdefault(pair[0], set()).add(pair[1])
            outdegrees.setdefault(pair[1], set()).add(pair[0])
        first = -1
        for key, value in outdegrees.items():
            if len(value) == 1:
                first = key
                break
        ret = [first]
        while ret[-1] in outdegrees:
            ret.append(outdegrees[ret[-1]].pop())
            outdegrees[ret[-1]].remove(ret[-2])
            if not outdegrees[ret[-1]]:
                del outdegrees[ret[-1]]
        return ret


solution = Solution()
print(solution.restoreArray([[2, 1], [3, 4], [3, 2]]))
print(solution.restoreArray([[4, -2], [1, 4], [-3, 1]]))
print(solution.restoreArray([[100000, -100000]]))
