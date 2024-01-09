function minJumps(arr: number[]): number {
    const numIndics: Map<number, number[]> = new Map;
    for (let i = 0; i < arr.length; i++) {
        if (!numIndics.has(arr[i])) numIndics.set(arr[i], []);
        numIndics.get(arr[i])?.push(i);
    }

    const queue: number[][] = [[0, 0]];
    const visited: Set<number> = new Set;
    while (queue.length) {
        const [idx, step] = queue.shift()!;
        if (idx === arr.length - 1) return step;

        if (idx > 0 && !visited.has(idx - 1)) {
            visited.add(idx - 1);
            queue.push([idx - 1, step + 1]);
        }
        if (idx < arr.length - 1 && !visited.has(idx + 1)) {
            visited.add(idx + 1);
            queue.push([idx + 1, step + 1]);
        }
        for (let i of numIndics.get(arr[idx])!) {
            if (i !== idx && !visited.has(i)) {
                visited.add(i);
                queue.push([i, step + 1]);
            }
        }
        numIndics.set(arr[idx], []);
    }

    return 0;
};

console.log(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404]));
console.log(minJumps([7]));
console.log(minJumps([7, 6, 9, 6, 9, 6, 9, 7]));