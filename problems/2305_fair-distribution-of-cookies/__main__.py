from typing import List


class Solution:
    ret: int
    n: int

    def distributeCookies(self, cookies: List[int], k: int) -> int:
        self.ret, self.n = sum(cookies), len(cookies)

        if k == self.n:
            return max(cookies)

        self.dfs(0, [0] * k, cookies, k)
        return self.ret

    def dfs(self, idx: int, children: List[int], cookies: List[int], k: int):
        if idx == self.n:
            self.ret = min(self.ret, max(children))
            return

        cookie = cookies[idx]
        for i in range(k):
            children[i] += cookie
            self.dfs(idx + 1, children, cookies, k)
            children[i] -= cookie


solution = Solution()
print(solution.distributeCookies(cookies=[8, 15, 10, 20, 8], k=2))
print(solution.distributeCookies([64, 32, 16, 8, 4, 2, 1, 1000], 8))
