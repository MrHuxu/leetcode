function diagonalSum(mat: number[][]): number {
    let ret = 0;
    const n = mat.length;
    for (let i = 0; i < n; i++) ret += mat[i][i] + mat[i][n - 1 - i];
    if (n % 2) {
        const mid = Math.floor(n / 2);
        ret -= mat[mid][mid];
    }
    return ret;
};