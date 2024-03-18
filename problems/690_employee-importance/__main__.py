"""
# Definition for Employee.
class Employee:
    def __init__(self, id: int, importance: int, subordinates: List[int]):
        self.id = id
        self.importance = importance
        self.subordinates = subordinates
"""


class Solution:
    def getImportance(self, employees: List["Employee"], id: int) -> int:
        id_node = {e.id: e for e in employees}
        root = next((e for e in employees if e.id == id), None)

        def traverse(node):
            ret = node.importance
            for child in node.subordinates:
                ret += traverse(id_node[child])
            return ret

        return traverse(root)
