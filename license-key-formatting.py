class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        arr = []
        for ch in reversed(s):
            if ch == "-":
                continue
            if not arr or len(arr[-1]) == k:
                arr.append(ch.upper())
                continue
            arr[-1] = ch.upper() + arr[-1]
        return "-".join(reversed(arr))
