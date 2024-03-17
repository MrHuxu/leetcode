class MyCircularDeque:

    def __init__(self, k: int):
        self.data = []
        self.k = k

    def insertFront(self, value: int) -> bool:
        if self.isFull():
            return False
        self.data = [value] + self.data
        return True

    def insertLast(self, value: int) -> bool:
        if self.isFull():
            return False
        self.data.append(value)
        return True

    def deleteFront(self) -> bool:
        if self.isEmpty():
            return False
        self.data.pop(0)
        return True

    def deleteLast(self) -> bool:
        if self.isEmpty():
            return False
        self.data.pop()
        return True

    def getFront(self) -> int:
        return -1 if self.isEmpty() else self.data[0]

    def getRear(self) -> int:
        return -1 if self.isEmpty() else self.data[-1]

    def isEmpty(self) -> bool:
        return not self.data

    def isFull(self) -> bool:
        return len(self.data) == self.k


# Your MyCircularDeque object will be instantiated and called as such:
# obj = MyCircularDeque(k)
# param_1 = obj.insertFront(value)
# param_2 = obj.insertLast(value)
# param_3 = obj.deleteFront()
# param_4 = obj.deleteLast()
# param_5 = obj.getFront()
# param_6 = obj.getRear()
# param_7 = obj.isEmpty()
# param_8 = obj.isFull()
