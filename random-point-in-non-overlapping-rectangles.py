class Solution:

    def __init__(self, rects: List[List[int]]):
        self.rects = rects
        self.areas = [
            (rect[2] - rect[0] + 1) * (rect[3] - rect[1] + 1) for rect in rects
        ]
        self.area_sum = sum(self.areas)

    def pick(self) -> List[int]:
        rand_area = random.randint(1, self.area_sum)
        rect_idx, area_sum = 0, 0
        while True:
            area_sum += self.areas[rect_idx]
            if area_sum >= rand_area:
                break
            rect_idx += 1
        rect = self.rects[rect_idx]
        return [random.randint(rect[0], rect[2]), random.randint(rect[1], rect[3])]


# Your Solution object will be instantiated and called as such:
# obj = Solution(rects)
# param_1 = obj.pick()
