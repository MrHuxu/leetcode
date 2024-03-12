class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        ret = list(s)
        i, j = 0, k - 1
        while i < len(s):
            self.reverse(ret, i, min(j, len(ret) - 1))
            i, j = i + k * 2, j + k * 2
        return "".join(ret)

    def reverse(self, arr, i, j):
        while i < j:
            arr[i], arr[j] = arr[j], arr[i]
            i, j = i + 1, j - 1
