class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
        def dfs(s, used):
            generate = set()
            for i, ch in enumerate(tiles):
                if used[i]:
                    continue
                generate.add(s + ch)
                used[i] = True
                generate.update(dfs(s + ch, used))
                used[i] = False
            return generate

        return len(dfs("", [False] * len(tiles)))


print(Solution().numTilePossibilities("AAB"))
print(Solution().numTilePossibilities("AAABBC"))
print(Solution().numTilePossibilities("V"))
