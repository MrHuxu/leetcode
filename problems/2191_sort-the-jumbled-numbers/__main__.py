from typing import List


class Solution:
    def sortJumbled(self, mapping: List[int], nums: List[int]) -> List[int]:
        def conv(num: int) -> int:
            return (
                mapping[num] if num < 10 else conv(num // 10) * 10 + mapping[num % 10]
            )

        return [
            nums[idx] for _, idx in sorted((conv(num), i) for i, num in enumerate(nums))
        ]


print(
    Solution().sortJumbled(mapping=[8, 9, 4, 0, 2, 1, 3, 5, 7, 6], nums=[991, 338, 38])
)
# Output: [338,38,991]
print(
    Solution().sortJumbled(mapping=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], nums=[789, 456, 123])
)
# Output: [123,456,789]
