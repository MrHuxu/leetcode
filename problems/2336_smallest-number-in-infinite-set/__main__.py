class SmallestInfiniteSet:

    def __init__(self):
        self.removed = set()

    def popSmallest(self) -> int:
        for i in range(1, 3000):
            if i not in self.removed:
                self.removed.add(i)
                return i

    def addBack(self, num: int) -> None:
        if num in self.removed:
            self.removed.remove(num)


# Your SmallestInfiniteSet object will be instantiated and called as such:
# obj = SmallestInfiniteSet()
# param_1 = obj.popSmallest()
# obj.addBack(num)


si = SmallestInfiniteSet()
si.addBack(2)
print(si.popSmallest())
print(si.popSmallest())
print(si.popSmallest())
si.addBack(1)
print(si.popSmallest())
print(si.popSmallest())
print(si.popSmallest())
