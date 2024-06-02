from heapq import heapify, heappop, heappush


class Solution:
    def clearStars(self, s: str) -> str:
        heap, need_to_remove = [], set()
        heapify(heap)
        for i, ch in enumerate(s):
            if ch != "*":
                heappush(heap, (ch, -i))
            else:
                need_to_remove.add(-heappop(heap)[1])
        return "".join(
            ch for i, ch in enumerate(s) if i not in need_to_remove and ch != "*"
        )


print(Solution().clearStars("aaba*"))
print(Solution().clearStars("abc"))
