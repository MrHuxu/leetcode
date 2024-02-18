class TrieNode:
    def __init__(self):
        self.children: Dict[str,TrieNode] = {}


class Solution:
    def longestCommonPrefix(self, arr1: List[int], arr2: List[int]) -> int:
        trie1, trie2 = TrieNode(), TrieNode()
        for num in arr1:
            tmp = trie1
            for ch in str(num):
                if ch not in tmp.children:
                    tmp.children[ch] = TrieNode()
                tmp = tmp.children[ch]
        for num in arr2:
            tmp = trie2
            for ch in str(num):
                if ch not in tmp.children:
                    tmp.children[ch] = TrieNode()
                tmp = tmp.children[ch]
        # print(trie1.children, trie2.children)
        return self.getLongestPrefix(trie1, trie2)

    def getLongestPrefix(self, trie1: TrieNode, trie2: TrieNode) -> int:
        ret = 0
        for i in ['0', '1', '2', '3', '4','5','6', '7', '8', '9']:
            if i in trie1.children and i in trie2.children:
                ret = max(ret, self.getLongestPrefix(trie1.children[i], trie2.children[i]) + 1)
        return ret