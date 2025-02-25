class Solution:
    def minimumLength(self, s: str) -> int:
        front, tail = 0, len(s) - 1
        while front < tail and s[front] == s[tail]:
            while True:
                front += 1
                if front == len(s) or s[front] != s[front - 1]:
                    break
            while True:
                tail -= 1
                if tail == -1 or s[tail] != s[tail + 1]:
                    break
        return 0 if front > tail else tail - front + 1
