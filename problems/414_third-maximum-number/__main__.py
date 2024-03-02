class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        max_1, max_2, max_3 = None, None, None
        for num in nums:
            # print(num, max_1, max_2, max_3)
            if num == max_1 or num == max_2 or num == max_3:
                continue

            if max_1 is None or num > max_1:
                max_1, max_2, max_3 = num, max_1, max_2
            elif max_2 is None or num > max_2:
                max_2, max_3 = num, max_2
            elif max_3 is None or num > max_3:
                max_3 = num
        return max_1 if max_3 == None else max_3
