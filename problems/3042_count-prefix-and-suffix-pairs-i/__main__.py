class Solution:
    def countPrefixSuffixPairs(self, words: List[str]) -> int:
        ret, n = 0, len(words)
        for i in range(n):
            for j in range(i + 1, n):
                if len(words[i]) > len(words[j]):
                    continue

                if self.is_prefix_and_suffix(words[i], words[j]):
                    ret += 1
        return ret

    def is_prefix_and_suffix(self, str1, str2):
        prefix_length = len(str1)
        suffix_length = len(str2) - len(str1)
        return str2[:prefix_length] == str1 and str2[suffix_length:] == str1