class MyLinkedList:

    def __init__(self):
        self.data = []

    def get(self, index: int) -> int:
        return self.data[index] if 0 <= index < len(self.data) else -1

    def addAtHead(self, val: int) -> None:
        self.data = [val] + self.data

    def addAtTail(self, val: int) -> None:
        self.data += [val]

    def addAtIndex(self, index: int, val: int) -> None:
        if index > len(self.data):
            return
        self.data = self.data[:index] + [val] + self.data[index:]

    def deleteAtIndex(self, index: int) -> None:
        if index < 0 or index >= len(self.data):
            return
        self.data = self.data[:index] + self.data[index + 1 :]


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)
