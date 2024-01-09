function closedIsland(grid: number[][]): number {
    let ret: number = 0;
    const visited: boolean[][] = Array.from({ length: grid.length }, () =>
        new Array(grid[0].length).fill(false)
    );
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (!grid[i][j] && !visited[i][j] && dfs(i, j, grid, visited)) {
                ret++;
            }
        }
    }
    return ret;
}

const dfs = (
    i: number,
    j: number,
    grid: number[][],
    visited: boolean[][]
): boolean => {
    visited[i][j] = true;
    let ret = !(
        i === 0 ||
        j === 0 ||
        i === grid.length - 1 ||
        j === grid[0].length - 1
    );
    if (i > 0 && !visited[i - 1][j] && !grid[i - 1][j])
        ret = dfs(i - 1, j, grid, visited) && ret;
    if (j > 0 && !visited[i][j - 1] && !grid[i][j - 1])
        ret = dfs(i, j - 1, grid, visited) && ret;
    if (i < grid.length - 1 && !visited[i + 1][j] && !grid[i + 1][j])
        ret = dfs(i + 1, j, grid, visited) && ret;
    if (j < grid[0].length - 1 && !visited[i][j + 1] && !grid[i][j + 1])
        ret = dfs(i, j + 1, grid, visited) && ret;
    return ret;
};

console.log(
    closedIsland([
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 1, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 0],
    ])
);
console.log(
    closedIsland([
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 1, 1, 0],
    ])
);
console.log(
    closedIsland([
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1],
    ])
);
console.log(
    closedIsland([
        [0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
        [1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
        [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
        [1, 1, 1, 0, 1, 1, 0, 1, 1, 0],
    ])
);
