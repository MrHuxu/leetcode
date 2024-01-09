import unittest


class ParkingSystem:

    def __init__(self, big: int, medium: int, small: int):
        self.stock = [big, medium, small]
        self.used = [0, 0, 0]

    def addCar(self, carType: int) -> bool:
        self.used[carType - 1] += 1
        if self.used[carType - 1] <= self.stock[carType - 1]:
            return True
        return False

# Your ParkingSystem object will be instantiated and called as such:
# obj = ParkingSystem(big, medium, small)
# param_1 = obj.addCar(carType)


class TestSolution(unittest.TestCase):
    def test(self):
        ps = ParkingSystem(1, 1, 0)
        self.assertTrue(ps.addCar(1))
        self.assertTrue(ps.addCar(2))
        self.assertFalse(ps.addCar(3))
        self.assertFalse(ps.addCar(1))
