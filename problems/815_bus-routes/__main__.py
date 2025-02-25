from typing import Dict, List, Set


class Solution:
    def numBusesToDestination(
        self, routes: List[List[int]], source: int, target: int
    ) -> int:
        if source == target:
            return 0

        stop_bus: Dict[int, Set[int]] = {}
        for i, route in enumerate(routes):
            for stop in route:
                stop_bus.setdefault(stop, set()).add(i)
        visited_bus: Set[int] = set()
        visited_stop: Dict[int, int] = {source: 0}
        queue: List[List[int]] = [[source, 1]]
        while queue:
            stop, step = queue.pop(0)
            for bus in stop_bus[stop]:
                if bus in visited_bus:
                    continue
                visited_bus.add(bus)
                if target in routes[bus]:
                    return step
                for next_stop in routes[bus]:
                    if (
                        next_stop not in visited_stop
                        or step + 1 < visited_stop[next_stop]
                    ):
                        visited_stop[next_stop] = step + 1
                        queue.append([next_stop, step + 1])
        return -1


solution = Solution()
print(solution.numBusesToDestination([[1, 2, 7], [3, 6, 7]], 1, 6))
print(solution.numBusesToDestination([[1, 2, 7], [3, 6, 7]], 1, 2))
print(
    solution.numBusesToDestination(
        [[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12
    )
)
