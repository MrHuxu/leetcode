class Solution:

    def __init__(self, radius: float, x_center: float, y_center: float):
        self.r, self.x, self.y = radius, x_center, y_center

    def randPoint(self) -> List[float]:
        ang, r = random.uniform(0, 2 * math.pi), math.sqrt(random.uniform(0, self.r ** 2))
        return [self.x + r * math.cos(ang), self.y + r * math.sin(ang)]


# Your Solution object will be instantiated and called as such:
# obj = Solution(radius, x_center, y_center)
# param_1 = obj.randPoint()