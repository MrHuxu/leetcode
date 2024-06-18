class Solution:
    def maxProfitAssignment(
        self, difficulty: List[int], profit: List[int], worker: List[int]
    ) -> int:
        n, m = len(difficulty), len(worker)

        worker.sort()
        jobs = sorted((difficulty[i], profit[i]) for i in range(n))

        ret = 0
        job_idx, max_profit = 0, jobs[0][1]
        for ability in worker:
            while job_idx + 1 < n and jobs[job_idx + 1][0] <= ability:
                job_idx += 1
                max_profit = max(max_profit, jobs[job_idx][1])
            if ability >= jobs[job_idx][0]:
                ret += max_profit
        return ret
