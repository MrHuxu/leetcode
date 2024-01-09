from typing import List


class Solution:
    def fullBloomFlowers(
        self, flowers: List[List[int]], people: List[int]
    ) -> List[int]:
        uniq_people = sorted(list(set(people)))
        operations = [0] * len(uniq_people)
        flowers.sort()
        for flower in flowers:
            start, end = flower
            if start > uniq_people[-1] or end < uniq_people[0]:
                continue

            left, right = 0, len(uniq_people) - 1
            while left <= right:
                mid = (left + right) // 2
                if uniq_people[mid] < start:
                    left = mid + 1
                else:
                    right = mid - 1
            operations[left] += 1

            left, right = 0, len(uniq_people) - 1
            while left <= right:
                mid = (left + right) // 2
                if uniq_people[mid] <= end:
                    left = mid + 1
                else:
                    right = mid - 1
            if left < len(operations):
                operations[left] -= 1

        for i in range(1, len(operations)):
            operations[i] += operations[i - 1]
        people_cnt = {uniq_people[i]: operations[i] for i in range(len(operations))}
        return [people_cnt[p] for p in people]


solution = Solution()
print(solution.fullBloomFlowers([[1, 6], [3, 7], [9, 12], [4, 13]], [2, 3, 7, 11]))
print(solution.fullBloomFlowers([[1, 10], [3, 3]], [3, 3, 2]))
