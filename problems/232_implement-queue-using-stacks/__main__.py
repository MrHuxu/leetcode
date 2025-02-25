class MyQueue:

    def __init__(self):
        self.stack1 = []
        self.stack2 = []

    def push(self, x: int) -> None:
        while self.stack2:
            self.stack1.append(self.stack2.pop(-1))
        self.stack1.append(x)

    def pop(self) -> int:
        while self.stack1:
            self.stack2.append(self.stack1.pop(-1))
        return self.stack2.pop(-1)

    def peek(self) -> int:
        return self.stack1[0] if self.stack1 else self.stack2[-1]

    def empty(self) -> bool:
        return not self.stack1 and not self.stack2


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
