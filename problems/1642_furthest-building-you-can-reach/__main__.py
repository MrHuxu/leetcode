class Solution:
    def furthestBuilding(self, heights: List[int], bricks: int, ladders: int) -> int:
        min_heap = []

        for i in range(len(heights) - 1):
            if heights[i] >= heights[i + 1]:
                continue

            bricks -= heights[i + 1] - heights[i]
            heapq.heappush(min_heap, -(heights[i + 1] - heights[i]))
            if bricks < 0:
                bricks += -heapq.heappop(min_heap)
                if ladders > 0:
                    ladders -= 1
                else:
                    return i

        return len(heights) - 1
