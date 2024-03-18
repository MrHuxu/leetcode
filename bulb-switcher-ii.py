class Solution:
    def flipLights(self, n: int, presses: int) -> int:
        init, btn1, btn2, btn3, btn4 = 0, 0, 0, 0, 0
        for i in range(n):
            init = (init << 1) + 1
            btn1 = (btn1 << 1) + 1
            btn2 = (btn2 << 1) + (0 if i % 2 == 0 else 1)
            btn3 = (btn3 << 1) + (1 if i % 2 == 0 else 0)
            btn4 = (btn4 << 1) + (0 if i % 3 == 0 else 1)
        ret, visited, queue = set(), set(), [(init, presses)]
        while queue:
            state, remaining = queue.pop(0)
            if remaining == 0:
                ret.add(state)
            else:
                for btn in [btn1, btn2, btn3, btn4]:
                    next_state = state ^ btn
                    t = (next_state, remaining - 1)
                    if t in visited:
                        continue
                    visited.add(t)
                    queue.append(t)
        return len(ret)
