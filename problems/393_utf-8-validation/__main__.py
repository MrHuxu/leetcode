VALIDATOR = 2**7


class Solution:
    def validUtf8(self, data: List[int]) -> bool:
        remaining = 0
        for num in data:
            cnt, tmp = 0, VALIDATOR
            while tmp & num:
                cnt += 1
                tmp >>= 1
            if cnt > 4:
                return False
            elif cnt == 0:
                if remaining > 0:
                    return False
            elif cnt == 1:
                if remaining > 0:
                    remaining -= 1
                else:
                    return False
            else:
                if remaining != 0:
                    return False
                else:
                    remaining = cnt - 1
        return remaining == 0