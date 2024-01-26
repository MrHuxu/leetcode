from typing import List, Optional, Dict


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    cnt: Dict[int, int]
    max_cnt: int

    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        self.cnt = {}
        self.max_cnt = 0
        self.helper(root)
        ret = []
        for num in self.cnt.keys():
            if self.cnt[num] == self.max_cnt:
                ret.append(num)
        return ret

    def helper(self, root: Optional[TreeNode]):
        if not root:
            return

        self.cnt[root.val] = self.cnt.get(root.val, 0) + 1
        self.max_cnt = max(self.max_cnt, self.cnt[root.val])
        self.helper(root.left)
        self.helper(root.right)
