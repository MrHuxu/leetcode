class Solution:
    def buddyStrings(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False

        if s == goal:
            visited = set()
            for c in s:
                if c in visited:
                    return True
                visited.add(c)

        diff_idx, swapped = -1, False
        for i in range(len(s)):
            if s[i] != goal[i]:
                if swapped:
                    return False

                if diff_idx == -1:
                    diff_idx = i
                else:
                    if s[diff_idx] != goal[i] or s[i] != goal[diff_idx]:
                        return False
                    swapped = True
        return swapped


solution = Solution()
print(solution.buddyStrings("ab", "ba"))
print(solution.buddyStrings("ab", "ab"))
print(solution.buddyStrings("aa", "aa"))
