from typing import List


class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        if k == 0:
            return [0] * len(code)

        ret = [0] * len(code)
        total_sum = sum(code)
        need_to_add = int(abs(k / len(code))) * total_sum
        for i in range(len(code)):
            tmp = 0
            if k > 0:
                for j in range(i + 1, i + 1 + k % len(code)):
                    tmp += code[j % len(code)]
            else:
                for j in range(i - 1, i - 1 - (abs(k) % len(code)), -1):
                    tmp += code[j if j >= 0 else j + len(code)]
            ret[i] = need_to_add + tmp
        return ret


print(Solution().decrypt(code=[5, 7, 1, 4], k=3))
print(Solution().decrypt(code=[1, 2, 3, 4], k=0))
print(Solution().decrypt(code=[2, 4, 9, 3], k=-2))
print(Solution().decrypt([10, 5, 7, 7, 3, 2, 10, 3, 6, 9, 1, 6], -4))
