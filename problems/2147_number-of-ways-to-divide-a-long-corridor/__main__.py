MOD = 10**9 + 7


class Solution:
    def numberOfWays(self, corridor: str) -> int:
        ret, pos, cnt, total_s = 0, -1, 0, 0
        for i, ch in enumerate(corridor):
            if ch == "P":
                continue
            total_s += 1

            if cnt == 0:
                if pos != -1:
                    ret = ret * (i - pos) % MOD
                cnt += 1
            else:
                ret = 1 if ret == 0 else ret
                pos = i
                cnt = 0
        return ret if total_s % 2 == 0 else 0


solution = Solution()
print(solution.numberOfWays("SSPPSPS"))
print(solution.numberOfWays("PPSPSP"))
print(solution.numberOfWays("S"))
print(
    solution.numberOfWays(
        "SPPPPPPPSPPPSPSSSPPPPPPPPPPPPPPPPPSPPPPPPPPPPPPPPPPSPPPPPSPSPPPPPPSPSPPSPSPPPSPSPPSSPPPPPSPPSSPP"
    )
)
