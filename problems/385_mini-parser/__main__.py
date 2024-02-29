# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
# class NestedInteger:
#    def __init__(self, value=None):
#        """
#        If value is not specified, initializes an empty list.
#        Otherwise initializes a single integer equal to value.
#        """
#
#    def isInteger(self):
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        :rtype bool
#        """
#
#    def add(self, elem):
#        """
#        Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
#        :rtype void
#        """
#
#    def setInteger(self, value):
#        """
#        Set this NestedInteger to hold a single integer equal to value.
#        :rtype void
#        """
#
#    def getInteger(self):
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        :rtype int
#        """
#
#    def getList(self):
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        :rtype List[NestedInteger]
#        """


class Solution:
    def deserialize(self, s: str) -> NestedInteger:
        stack = []
        for i, ch in enumerate(s):
            if ch == "[" or ch == "-":
                stack.append(ch)
            elif ch == ",":
                if isinstance(stack[-1], str):
                    stack = [*stack[: len(stack) - 1], NestedInteger(int(stack[-1]))]
            elif "0" <= ch <= "9":
                if i > 0 and (s[i - 1] == "-" or "0" <= s[i - 1] <= "9"):
                    stack[-1] += ch
                else:
                    stack.append(ch)
            else:
                l = []
                while True:
                    last = stack[-1]
                    stack = stack[: len(stack) - 1]
                    if last == "[":
                        break
                    if isinstance(last, str):
                        last = NestedInteger(int(last))
                    l.append(last)
                ni = NestedInteger()
                for i in reversed(l):
                    ni.add(i)
                stack.append(ni)
        return (
            stack[-1]
            if isinstance(stack[-1], NestedInteger)
            else NestedInteger(int(stack[-1]))
        )
