class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
        n = len(deck)
        deck.sort()
        deck_idx = 0
        ret, dq = [0] * n, deque(range(n))
        while dq:
            idx = dq.popleft()
            ret[idx] = deck[deck_idx]
            deck_idx += 1
            if dq:
                dq.append(dq.popleft())
        return ret
