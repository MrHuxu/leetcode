from typing import List


class Solution:
    def average(self, salary: List[int]) -> float:
        min = salary[0]
        max = salary[0]
        sum = 0
        for s in salary:
            sum += s
            if s < min:
                min = s
            if s > max:
                max = s
        return (sum - min - max) / (len(salary) - 2)
