class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        cnt, remaining = Counter(students), len(students)
        for sandwich in sandwiches:
            if sandwich not in cnt or not cnt[sandwich]:
                return remaining
            cnt[sandwich] -= 1
            remaining -= 1
        return 0
