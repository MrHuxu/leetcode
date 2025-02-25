class Solution:
    def frequencySort(self, s: str) -> str:
        return "".join(
            [key * cnt for key, cnt in sorted(Counter(s).items(), key=lambda x: -x[1])]
        )
