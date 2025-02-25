from typing import List


class Solution:
    def minOperations(self, boxes: str) -> List[int]:
        stones, sum, cnt = [], 0, 0
        for i, box in enumerate(boxes):
            if box == "1":
                stones.append(i)
                sum += i
                cnt += 1
        remaining_sum, remaining_cnt = sum, cnt
        ret = [0] * len(boxes)
        for i in range(len(boxes)):
            if stones and stones[0] <= i:
                remaining_sum -= stones.pop(0)
                remaining_cnt -= 1
            ret[i] = (
                (cnt - remaining_cnt) * i
                - (sum - remaining_sum)
                + remaining_sum
                - remaining_cnt * i
            )
        return ret


print(Solution().minOperations("110"))
print(Solution().minOperations("001011"))
