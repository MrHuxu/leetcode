class MyCalendarTwo:

    def __init__(self):
        self.data = {}

    def book(self, start: int, end: int) -> bool:
        self.data[start] = self.data.get(start, 0) + 1
        self.data[end] = self.data.get(end, 0) - 1
        cnt, times = 0, sorted(self.data.keys())
        for t in times:
            cnt += self.data[t]
            if cnt >= 3:
                break
        if cnt >= 3:
            self.data[start] -= 1
            self.data[end] += 1
            return False
        return True


# Your MyCalendarTwo object will be instantiated and called as such:
# obj = MyCalendarTwo()
# param_1 = obj.book(start,end)
