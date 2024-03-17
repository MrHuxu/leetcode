class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        queue_r, queue_d, n = [], [], len(senate)
        for i in range(n):
            if senate[i] == "R":
                queue_r.append(i)
            else:
                queue_d.append(i)
        while queue_r and queue_d:
            if queue_r[0] < queue_d[0]:
                queue_r.append(n)
            else:
                queue_d.append(n)
            n += 1
            queue_r.pop(0)
            queue_d.pop(0)
        return "Radiant" if queue_r else "Dire"
