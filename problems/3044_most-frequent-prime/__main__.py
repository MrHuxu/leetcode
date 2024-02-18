DIRECTIONS = [
    (-1, -1),
    (-1, 0),
    (-1, 1),
    (0, -1),
    (0, 1),
    (1, -1),
    (1, 0),
    (1, 1),
]

class Solution:
    def mostFrequentPrime(self, mat: List[List[int]]) -> int:
        nums: Dict[int, int] = {}
        m, n = len(mat), len(mat[0])
        for i in range(m):
            for j in range(n):
                for direction in DIRECTIONS:
                    num = mat[i][j]
                    x, y = i + direction[0], j + direction[1]
                    while 0 <= x < m and 0 <= y < n:
                        num = num * 10 + mat[x][y]
                        nums[num] = nums.get(num, 0) + 1
                        x, y = x + direction[0], y + direction[1]
        # print(nums)
        for _, num in sorted([(freq, num) for num, freq in nums.items()], reverse=True):
            if self.is_prime(num):
                return num
        return -1
    
    def is_prime(self, number):
        if number < 2:
            return False
        for i in range(2, int(number**0.5) + 1):
            if number % i == 0:
                return False
        return True