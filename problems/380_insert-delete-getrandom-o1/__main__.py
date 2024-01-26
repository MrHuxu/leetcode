import random

class RandomizedSet:

    def __init__(self):
        self.data = set()
        

    def insert(self, val: int) -> bool:
        if val in self.data:
            return False
        self.data.add(val)
        return True
        

    def remove(self, val: int) -> bool:
        if val not in self.data:
            return False
        self.data.remove(val)
        return True
        

    def getRandom(self) -> int:
        return random.choice(list(self.data))


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()