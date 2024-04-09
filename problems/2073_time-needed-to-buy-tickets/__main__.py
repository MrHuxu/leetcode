class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        ret = 0
        while tickets[k]:
            for i, ticket in enumerate(tickets):
                if ticket:
                    tickets[i] -= 1
                    ret += 1
                if i == k and tickets[i] == 0:
                    break
        return ret
