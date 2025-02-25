from typing import List

from pandas import NA


class Solution:
    def mostProfitablePath(
        self, edges: List[List[int]], bob: int, amount: List[int]
    ) -> int:
        n = len(amount)

        adj = {i: [] for i in range(n)}
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)

        path = [bob]

        def get_bob_path(curr, visited) -> bool:
            if curr == 0:
                return True
            visited[curr] = True
            for next in adj[curr]:
                path.append(next)
                if not visited[next] and get_bob_path(next, visited):
                    return True
                path.pop()
            return False

        get_bob_path(bob, [False] * n)

        bob_steps = [-1] * n
        for i, node in enumerate(path):
            bob_steps[node] = i
        # print(bob_steps)

        def get_alice_income(curr, visited, income, step) -> int:
            visited[curr] = True

            ret, is_leaf = None, True
            for next in adj[curr]:
                if visited[next]:
                    continue
                is_leaf = False

                next_income = income
                if step + 1 == bob_steps[next]:
                    next_income += amount[next] // 2
                elif bob_steps[next] == -1 or step + 1 < bob_steps[next]:
                    next_income += amount[next]
                next_ret = get_alice_income(next, visited, next_income, step + 1)
                ret = next_ret if ret is None else max(ret, next_ret)

            return income if is_leaf else ret

        return get_alice_income(0, [False] * n, amount[0], 0)


print(
    Solution().mostProfitablePath(
        edges=[[0, 1], [1, 2], [1, 3], [3, 4]], bob=3, amount=[-2, 4, 2, -4, 6]
    )
)
print(Solution().mostProfitablePath(edges=[[0, 1]], bob=1, amount=[-7280, 2350]))
# # -11662
# print(
#     Solution().mostProfitablePath(
#         [[0, 1], [1, 2], [2, 3]], 3, [-5644, -6018, 1188, -8502]
#     )
# )
# print(
#     Solution().mostProfitablePath(
#         [[0, 2], [1, 4], [1, 6], [2, 3], [2, 8], [3, 7], [4, 5], [6, 7]],
#         1,
#         [-1410, -9440, 5536, -774, 3044, 7924, -2122, -1192, 9166],
#     )
# )
print(
    Solution().mostProfitablePath(
        [
            [0, 38],
            [0, 59],
            [1, 30],
            [1, 62],
            [1, 53],
            [2, 41],
            [2, 37],
            [3, 21],
            [4, 35],
            [4, 54],
            [5, 32],
            [5, 69],
            [6, 26],
            [6, 16],
            [6, 61],
            [6, 52],
            [7, 34],
            [8, 10],
            [9, 11],
            [9, 43],
            [10, 48],
            [11, 29],
            [12, 63],
            [12, 58],
            [12, 13],
            [13, 36],
            [13, 34],
            [14, 65],
            [14, 15],
            [15, 17],
            [15, 49],
            [16, 40],
            [17, 20],
            [17, 24],
            [18, 58],
            [19, 25],
            [21, 34],
            [22, 55],
            [23, 45],
            [23, 59],
            [25, 43],
            [27, 32],
            [28, 49],
            [28, 33],
            [31, 61],
            [33, 39],
            [33, 51],
            [33, 53],
            [34, 68],
            [34, 69],
            [37, 52],
            [42, 52],
            [43, 61],
            [44, 58],
            [46, 49],
            [47, 55],
            [47, 50],
            [48, 56],
            [48, 66],
            [50, 58],
            [52, 66],
            [52, 65],
            [53, 57],
            [54, 63],
            [55, 57],
            [59, 60],
            [59, 67],
            [59, 65],
            [64, 69],
        ],
        47,
        [
            4664,
            5822,
            -9152,
            7258,
            -5468,
            4698,
            2568,
            9880,
            -4046,
            9884,
            -3540,
            -2260,
            5264,
            -7050,
            -6998,
            -1688,
            -6256,
            -5350,
            5136,
            7476,
            -4108,
            1288,
            1336,
            -6126,
            2940,
            698,
            -2900,
            -2342,
            -2310,
            858,
            572,
            640,
            -9674,
            5746,
            5068,
            7128,
            636,
            6680,
            -1840,
            3574,
            7592,
            -5882,
            -1974,
            -2766,
            -620,
            1088,
            -8930,
            7756,
            9966,
            380,
            8884,
            -954,
            -8198,
            -5862,
            -3100,
            7728,
            7090,
            -4648,
            4076,
            994,
            4232,
            9810,
            -2904,
            -1106,
            -4172,
            -5884,
            -9582,
            5320,
            -4086,
            6346,
        ],
    )
)
