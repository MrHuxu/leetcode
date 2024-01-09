package main

import (
	"fmt"
	"testing"
)

func ways(pizza []string, k int) int {
	sums := make([][]int, len(pizza)+1)
	for i := 0; i < len(sums); i++ {
		sums[i] = make([]int, len(pizza[0])+1)
	}
	count := func(r1, c1, r2, c2 int) int {
		var sum int
		for i := r1; i <= r2; i++ {
			sum += sums[i][c2+1] - sums[i][c1]
		}
		return sum
	}
	dp := make([][][]int, 51)
	for i := 0; i < len(dp); i++ {
		dp[i] = make([][]int, 51)
		for j := 0; j < len(dp[i]); j++ {
			dp[i][j] = make([]int, 11)
		}
	}

	mod := int(1e9 + 7)
	rows, cols := len(pizza), len(pizza[0])
	for i := 0; i < rows; i++ {
		sums[i][0] = 0
		for j := 0; j < cols; j++ {
			var tmp int
			if pizza[i][j] == 'A' {
				tmp = 1
			}
			sums[i][j+1] = sums[i][j] + tmp
		}
	}
	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			if count(i, j, rows-1, cols-1) > 0 {
				dp[i][j][0] = 1
			}
		}
	}

	for p := 1; p < k; p++ {
		for i := 0; i < rows; i++ {
			for j := 0; j < cols; j++ {
				dp[i][j][p] = 0
				for q := j; q < cols; q++ {
					if count(i, j, rows-1, q) > 0 {
						dp[i][j][p] = (dp[i][j][p] + dp[i][q+1][p-1]) % mod
					}
				}
				for q := i; q < rows; q++ {
					if count(i, j, q, cols-1) > 0 {
						dp[i][j][p] = (dp[i][j][p] + dp[q+1][j][p-1]) % mod
					}
				}
			}
		}
	}
	return dp[0][0][k-1]
}

func waysTLE(pizza []string, k int) int {
	var total int
	cnt := make([][]int, len(pizza)+1)
	for i := 0; i <= len(pizza); i++ {
		cnt[i] = make([]int, len(pizza[0])+1)
		if i == 0 {
			continue
		}

		var tmp int
		for j := 1; j <= len(pizza[0]); j++ {
			if pizza[i-1][j-1] == 'A' {
				tmp++
				total++
			}

			cnt[i][j] = tmp + cnt[i-1][j]
		}
	}

	return dfs(0, 0, 1, total, cnt, k)
}

func dfs(x, y, pieces, left int, cnt [][]int, k int) int {
	if pieces >= k {
		return 1
	}

	var ret int
	for i := x + 1; i < len(cnt); i++ {
		tmp := cnt[i][len(cnt[0])-1] - cnt[i][y] - cnt[x][len(cnt[0])-1] + cnt[x][y]
		if tmp > 0 && tmp < left {
			ret += dfs(i, y, pieces+1, left-tmp, cnt, k)
		}
	}
	for j := y + 1; j < len(cnt[0]); j++ {
		tmp := cnt[len(cnt)-1][j] - cnt[x][j] - cnt[len(cnt)-1][y] + cnt[x][y]
		if tmp > 0 && tmp < left {
			ret += dfs(x, j, pieces+1, left-tmp, cnt, k)
		}
	}
	return ret
}

func Test1444(t *testing.T) {
	fmt.Println(ways([]string{".A", "AA", "A."}, 3))
	fmt.Println(waysTLE([]string{".A", "AA", "A."}, 3))
	fmt.Println(waysTLE([]string{"A..", "AAA", "..."}, 3))
	fmt.Println(waysTLE([]string{"A..", "AA.", "..."}, 3))
	fmt.Println(waysTLE([]string{"A..", "A..", "..."}, 1))
	fmt.Println(ways([]string{"..A.A.AAA...AAAAAA.AA..A..A.A......A.AAA.AAAAAA.AA", "A.AA.A.....AA..AA.AA.A....AAA.A........AAAAA.A.AA.", "A..AA.AAA..AAAAAAAA..AA...A..A...A..AAA...AAAA..AA", "....A.A.AA.AA.AA...A.AA.AAA...A....AA.......A..AA.", "AAA....AA.A.A.AAA...A..A....A..AAAA...A.A.A.AAAA..", "....AA..A.AA..A.A...A.A..AAAA..AAAA.A.AA..AAA...AA", "A..A.AA.AA.A.A.AA..A.A..A.A.AAA....AAAAA.A.AA..A.A", ".AA.A...AAAAA.A..A....A...A.AAAA.AA..A.AA.AAAA.AA.", "A.AA.AAAA.....AA..AAA..AAAAAAA...AA.A..A.AAAAA.A..", "A.A...A.A...A..A...A.AAAA.A..A....A..AA.AAA.AA.AA.", ".A.A.A....AAA..AAA...A.AA..AAAAAAA.....AA....A....", "..AAAAAA..A..A...AA.A..A.AA......A.AA....A.A.AAAA.", "...A.AA.AAA.AA....A..AAAA...A..AAA.AAAA.A.....AA.A", "A.AAAAA..A...AAAAAAAA.AAA.....A.AAA.AA.A..A.A.A...", "A.A.AA...A.A.AA...A.AA.AA....AA...AA.A..A.AA....AA", "AA.A..A.AA..AAAAA...A..AAAAA.AA..AA.AA.A..AAAAA..A", "...AA....AAAA.A...AA....AAAAA.A.AAAA.A.AA..AA..AAA", "..AAAA..AA..A.AA.A.A.AA...A...AAAAAAA..A.AAA..AA.A", "AA....AA....AA.A......AAA...A...A.AA.A.AA.A.A.AA.A", "A.AAAA..AA..A..AAA.AAA.A....AAA.....A..A.AA.A.A...", "..AA...AAAAA.A.A......AA...A..AAA.AA..A.A.A.AA..A.", ".......AA..AA.AAA.A....A...A.AA..A.A..AAAAAAA.AA.A", ".A.AAA.AA..A.A.A.A.A.AA...AAAA.A.A.AA..A...A.AAA..", "A..AAAAA.A..A..A.A..AA..A...AAA.AA.A.A.AAA..A.AA..", "A.AAA.A.AAAAA....AA..A.AAA.A..AA...AA..A.A.A.AA.AA", ".A..AAAA.A.A.A.A.......AAAA.AA...AA..AAA..A...A.AA", "A.A.A.A..A...AA..A.AAA..AAAAA.AA.A.A.A..AA.A.A....", "A..A..A.A.AA.A....A...A......A.AA.AAA..A.AA...AA..", ".....A..A...A.A...A..A.AA.A...AA..AAA...AA..A.AAA.", "A...AA..A..AA.A.A.AAA..AA..AAA...AAA..AAA.AAAAA...", "AA...AAA.AAA...AAAA..A...A..A...AA...A..AA.A...A..", "A.AA..AAAA.AA.AAA.A.AA.A..AAAAA.A...A.A...A.AA....", "A.......AA....AA..AAA.AAAAAAA.A.AA..A.A.AA....AA..", ".A.A...AA..AA...AA.AAAA.....A..A..A.AA.A.AA...A.AA", "..AA.AA.AA..A...AA.AA.AAAAAA.....A.AA..AA......A..", "AAA..AA...A....A....AA.AA.AA.A.A.A..AA.AA..AAA.AAA", "..AAA.AAA.A.AA.....AAA.A.AA.AAAAA..AA..AA.........", ".AA..A......A.A.AAA.AAAA...A.AAAA...AAA.AAAA.....A", "AAAAAAA.AA..A....AAAA.A..AA.A....AA.A...A.A....A..", ".A.A.AA..A.AA.....A.A...A.A..A...AAA..A..AA..A.AAA", "AAAA....A...A.AA..AAA..A.AAA..AA.........AA.AAA.A.", "......AAAA..A.AAA.A..AAA...AAAAA...A.AA..A.A.AA.A.", "AA......A.AAAAAAAA..A.AAA...A.A....A.AAA.AA.A.AAA.", ".A.A....A.AAA..A..AA........A.AAAA.AAA.AA....A..AA", ".AA.A...AA.AAA.A....A.A...A........A.AAA......A...", "..AAA....A.A...A.AA..AAA.AAAAA....AAAAA..AA.AAAA..", "..A.AAA.AA..A.AA.A...A.AA....AAA.A.....AAA...A...A", ".AA.AA...A....A.AA.A..A..AAA.A.A.AA.......A.A...A.", "...A...A.AA.A..AAAAA...AA..A.A..AAA.AA...AA...A.A.", "..AAA..A.A..A..A..AA..AA...A..AA.AAAAA.A....A..A.A"}, 8))
	t.Error()
}
