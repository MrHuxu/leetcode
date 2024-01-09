import heapq
from typing import List


class SeatManager:
    seats: List[int]

    def __init__(self, n: int):
        self.seats = list(range(1, n + 1))
        heapq.heapify(self.seats)

    def reserve(self) -> int:
        return heapq.heappop(self.seats)

    def unreserve(self, seatNumber: int) -> None:
        heapq.heappush(self.seats, seatNumber)


# Your SeatManager object will be instantiated and called as such:
# obj = SeatManager(n)
# param_1 = obj.reserve()
# obj.unreserve(seatNumber)

sm = SeatManager(5)
print(sm.reserve())
print(sm.reserve())
print(sm.unreserve(2))
print(sm.reserve())
print(sm.reserve())
print(sm.reserve())
print(sm.reserve())
print(sm.unreserve(5))
print(sm.reserve())
