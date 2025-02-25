class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        cnt = [0] * 26
        for t in tasks:
            cnt[ord(t) - ord("A")] += 1
        cnt.sort(key=lambda x: -x)
        chunk = cnt[0] - 1
        idle = chunk * n
        for i in range(1, 25):
            idle -= min(chunk, cnt[i])
        return len(tasks) + idle if idle >= 0 else len(tasks)
