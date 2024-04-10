class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
        n = len(deck)
        deck.sort()
        deck_idx = 0
        ret = [0] * n
        dq = deque()
        for i in range(n):
            dq.append(i)
        while dq:
            idx = dq.popleft()
            ret[idx] = deck[deck_idx]
            deck_idx += 1
            if dq:
                dq.append(dq.popleft())
        return ret
