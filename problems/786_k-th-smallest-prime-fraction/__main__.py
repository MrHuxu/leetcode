from typing import List


class Solution:
    def kthSmallestPrimeFraction(self, arr: List[int], k: int) -> List[int]:
        arr.sort()
        n = len(arr)
        return list(
            sorted(
                [
                    (arr[i] / arr[j], arr[i], arr[j])
                    for i in range(n - 1)
                    for j in range(i, n)
                ]
            )[k - 1][1:]
        )


print(Solution().kthSmallestPrimeFraction([1, 2, 3, 5], 3))
print(Solution().kthSmallestPrimeFraction([1, 7], 1))
