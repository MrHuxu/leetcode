class Solution:
    def sortByBits(self, arr: List[int]) -> List[int]:
        num_of_bits: Dict[int, int] = {}
        for num in arr:
            if num in num_of_bits:
                continue
            tmp, cnt = num, 0
            while tmp > 0:
                cnt += tmp & 1
                tmp = tmp >> 1
            num_of_bits[num] = cnt
        return sorted(arr, key=lambda num: (num_of_bits[num], num))