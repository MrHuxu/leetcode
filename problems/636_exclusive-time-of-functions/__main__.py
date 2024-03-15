class Solution:
    def exclusiveTime(self, n: int, logs: List[str]) -> List[int]:
        arr = [(int(l0), l1, int(l2)) for l0, l1, l2 in [l.split(":") for l in logs]]
        ret = [0] * n
        stack = []
        for item in arr:
            if not stack or item[1] == "start":
                stack.append(item)
                continue

            remaining = item[2]
            while not (stack[-1][0] == item[0] and stack[-1][1] == "start"):
                remaining -= stack[-1][2]
                stack.pop()

            start = stack.pop()
            stack.append((start[0], "duration", item[2] - start[2] + 1))
            ret[start[0]] += remaining - start[2] + 1
        return ret
