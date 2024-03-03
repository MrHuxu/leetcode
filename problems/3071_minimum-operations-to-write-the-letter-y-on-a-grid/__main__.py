from typing import List


class Solution:
    def minimumOperationsToWriteY(self, grid: List[List[int]]) -> int:
        n = len(grid)
        cnt1, cnt2 = {i: 0 for i in range(3)}, {i: 0 for i in range(3)}
        for i, row in enumerate(grid):
            for j, cell in enumerate(row):
                if i < n // 2:
                    if j == i or j == n - 1 - i:
                        cnt1[cell] += 1
                    else:
                        cnt2[cell] += 1
                else:
                    if j == n // 2:
                        cnt1[cell] += 1
                    else:
                        cnt2[cell] += 1
        return min(
            cnt1[1] + cnt1[2] + cnt2[0] + cnt2[2],
            cnt1[1] + cnt1[2] + cnt2[0] + cnt2[1],
            cnt1[0] + cnt1[2] + cnt2[1] + cnt2[2],
            cnt1[0] + cnt1[2] + cnt2[0] + cnt2[1],
            cnt1[0] + cnt1[1] + cnt2[1] + cnt2[2],
            cnt1[0] + cnt1[1] + cnt2[0] + cnt2[2],
        )


print(Solution().minimumOperationsToWriteY(grid=[[1, 2, 2], [1, 1, 0], [0, 1, 0]]))
print(
    Solution().minimumOperationsToWriteY(
        grid=[
            [0, 1, 0, 1, 0],
            [2, 1, 0, 1, 2],
            [2, 2, 2, 0, 1],
            [2, 2, 2, 2, 2],
            [2, 1, 2, 2, 2],
        ]
    )
)
