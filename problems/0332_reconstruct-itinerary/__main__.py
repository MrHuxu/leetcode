from typing import Dict, List, Set


class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        remaining = len(tickets)
        adj: Dict[str, Dict[str, int]] = {}
        for src, dst in tickets:
            adj[src] = adj.get(src, {})
            adj[src][dst] = adj[src].get(dst, 0) + 1
        return self.dfs("JFK", remaining, adj)

    def dfs(
        self, curr: str, remaining: int, adj: Dict[str, Dict[str, int]]
    ) -> List[str]:
        if curr not in adj or not adj[curr]:
            return [curr] if remaining == 0 else []

        for dst in sorted(adj[curr].keys()):
            if adj[curr][dst] == 0:
                continue

            adj[curr][dst] -= 1
            if not adj[curr][dst]:
                del adj[curr][dst]
            ret = self.dfs(dst, remaining - 1, adj)
            adj[curr][dst] = adj[curr].get(dst, 0) + 1

            if ret:
                return [curr] + ret

        return []


solution = Solution()
print(
    solution.findItinerary(
        [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
    )
)
print(
    solution.findItinerary(
        [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]]
    )
)
print(
    solution.findItinerary(
        [
            ["EZE", "AXA"],
            ["TIA", "ANU"],
            ["ANU", "JFK"],
            ["JFK", "ANU"],
            ["ANU", "EZE"],
            ["TIA", "ANU"],
            ["AXA", "TIA"],
            ["TIA", "JFK"],
            ["ANU", "TIA"],
            ["JFK", "TIA"],
        ]
    )
)
