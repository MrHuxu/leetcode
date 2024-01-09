function average(salary: number[]): number {
    const [min, max, sum] = salary.reduce(([min, max, sum], val) => {
        return [Math.min(min, val), Math.max(max, val), sum + val];
    }, [salary[0], salary[0], 0]);
    return (sum - min - max) / (salary.length - 2);
};