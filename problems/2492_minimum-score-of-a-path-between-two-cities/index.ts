function minScore(n: number, roads: number[][]): number {
    const roadMap: Map<number, Map<number, number>> = new Map();
    for (let road of roads) {
        if (!roadMap.has(road[0])) roadMap.set(road[0], new Map());
        if (!roadMap.has(road[1])) roadMap.set(road[1], new Map());

        roadMap.get(road[0])?.set(road[1], road[2]);
        roadMap.get(road[1])?.set(road[0], road[2]);
    }

    let res = -1;
    const queue = [1];
    const visited: Set<number> = new Set();
    while (queue.length) {
        const start = queue.shift()!;
        for (let target of roadMap.get(start)!.keys()) {
            const distance = roadMap.get(start)!.get(target)!;
            if (res === -1 || distance < res) res = distance;
            if (!visited.has(target)) {
                visited.add(target);
                queue.push(target);
            }
        }
    }
    return res;
};

console.log(minScore(4, [[1, 2, 9], [2, 3, 6], [2, 4, 5], [1, 4, 7]]));
console.log(minScore(4, [[1, 2, 2], [1, 3, 4], [3, 4, 7]]));
