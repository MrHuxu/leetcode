from typing import Dict, List


class Solution:
    def minExtraChar(self, s: str, dictionary: List[str]) -> int:
        min_len, max_len = len(dictionary[0]), len(dictionary[0])
        for d in dictionary:
            min_len = max(min_len, len(d))
            max_len = max(max_len, len(d))
        
        dp: List[Dict[int, int]] = [{i: 0} for i in range(len(s))]
        for l in range(1, len(s) + 1):
            for i in range(len(s) - l + 1):
                j = i + l - 1
                if s[i:i + l] in dictionary:
                    dp[i][j] = 0
                else:
                    dp[i][j] = l
                    for k in range(i + 1, j + 1):
                        dp[i][j] = min(dp[i][j], dp[i][k - 1] + dp[k][j])
        return dp[0][len(s) - 1]
    
solution = Solution()
print(solution.minExtraChar('leetscode', ['leet', 'code']))
print(solution.minExtraChar('sayhelloworld', ['hello', 'world']))
print(solution.minExtraChar("eglglxa",["rs","j","h","g","fy","l","fc","s","zf","i","k","x","gl","qr","qj","b","m","cm","pe","y","ei","wg","e","c","ll","u","lb","kc","r","gs","p","ga","pq","o","wq","mp","ms","vp","kg","cu"]))