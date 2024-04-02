class Solution:
    def maxBottlesDrunk(self, numBottles: int, numExchange: int) -> int:
        full_bottles, empty_bottles, drunk_bottles = numBottles, 0, 0
        while full_bottles != 0 or empty_bottles >= numExchange:
            # print(full_bottles, empty_bottles, numExchange, drunk_bottles)
            if full_bottles != 0:
                empty_bottles += full_bottles
                drunk_bottles += full_bottles
                full_bottles = 0
            else:
                while empty_bottles >= numExchange:
                    empty_bottles -= numExchange
                    numExchange += 1
                    full_bottles += 1
        return drunk_bottles


print(Solution().maxBottlesDrunk(13, 6))
print(Solution().maxBottlesDrunk(10, 3))
