class ProductOfNumbers:
    def __init__(self):
        self.products = []

    def add(self, num: int) -> None:
        if not num:
            self.products = []
        elif not self.products:
            self.products.append(num)
        else:
            self.products.append(num * self.products[-1])

    def getProduct(self, k: int) -> int:
        if k > len(self.products):
            return 0
        elif k == len(self.products):
            return self.products[-1]
        return self.products[-1] // self.products[-k - 1]


"""
["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"]
[[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]
[null,null,null,null,null,null,20,40,0,null,32]
"""
obj = ProductOfNumbers()
print(obj.add(3))
print(obj.add(0))
print(obj.add(2))
print(obj.add(5))
print(obj.add(4))
print(obj.getProduct(2))
print(obj.getProduct(3))
print(obj.getProduct(4))
print(obj.add(8))
print(obj.getProduct(2))
