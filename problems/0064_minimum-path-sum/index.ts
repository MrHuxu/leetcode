function minPathSum(grid: number[][]): number {
    const dp = Array<Array<number>>(grid.length).fill(new Array());

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (i == 0 && j == 0) {
                dp[i][j] = grid[i][j];
            } else if (i == 0) {
                dp[i][j] = dp[i][j - 1] + grid[i][j];
                continue;
            } else if (j == 0) {
                dp[i][j] = dp[i - 1][j] + grid[i][j];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
            }
        }
    }

    return dp[grid.length - 1][grid[0].length - 1];
};

test('64', () => {
    expect(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])).toBe(7);
    expect(minPathSum([[1, 2, 3], [4, 5, 6]])).toBe(12);
});