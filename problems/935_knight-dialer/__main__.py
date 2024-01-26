from typing import List


MOVE: List[List[int]] = [
    [4, 6],
    [6, 8],
    [7, 9],
    [4, 8],
    [0, 3, 9],
    [],
    [0, 1, 7],
    [2, 6],
    [1, 3],
    [2, 4],
]

MOD = 10**9 + 7


class Solution:
    def knightDialer(self, n: int) -> int:
        list = [1] * 10
        for _ in range(n - 1):
            next_list = [0] * 10
            for j in range(10):
                for k in MOVE[j]:
                    next_list[k] = (next_list[k] + list[j]) % MOD
            list = next_list
        return sum(list) % MOD


solution = Solution()
print(solution.knightDialer(1))
print(solution.knightDialer(2))
print(solution.knightDialer(3131))
