from typing import List, Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Codec:

    def serialize(self, root: Optional[TreeNode]) -> str:
        """Encodes a tree to a single string."""
        if not root:
            return ""
        ret = str(root.val)
        if root.left:
            ret += "," + self.serialize(root.left)
        if root.right:
            ret += "," + self.serialize(root.right)
        return ret

    def deserialize(self, data: str) -> Optional[TreeNode]:
        """Decodes your encoded data to tree."""
        return self.deserializeNums([int(d) for d in data.split(",")])

    def deserializeNums(self, nums: List[any]) -> Optional[TreeNode]:
        if not nums:
            return None
        root = TreeNode(nums[0])
        idx = 1
        while idx < len(nums):
            if nums[idx] > nums[0]:
                break
            idx += 1
        root.left = self.deserializeNums(nums[1:idx])
        root.right = self.deserializeNums(nums[idx:])
        return root


# Your Codec object will be instantiated and called as such:
# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# tree = ser.serialize(root)
# ans = deser.deserialize(tree)
# return ans


node1, node2, node3 = TreeNode(1), TreeNode(2), TreeNode(3)
node2.left = node1
node2.right = node3

codec = Codec()
s = codec.serialize(node2)
t = codec.deserialize(s)
print(s)
print(t.val, t.left.val, t.right.val)
