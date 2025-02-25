class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        i, l = 0, len(arr)
        while i < l:
            j = i + 1
            while j < l:
                if arr[j] != arr[i]:
                    break
                j += 1
            if (j - i) * 4 > l:
                return arr[i]
            i = j
        return arr[-1]
