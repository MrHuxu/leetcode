function minReorder(n: number, connections: number[][]): number {
    const mapStartToEnd: Map<number, Array<number>> = new Map();
    const mapEndToStart: Map<number, Array<number>> = new Map();
    for (let connection of connections) {
        if (!mapStartToEnd.has(connection[0])) mapStartToEnd.set(connection[0], []);
        if (!mapEndToStart.has(connection[1])) mapEndToStart.set(connection[1], []);
        mapStartToEnd.get(connection[0])?.push(connection[1]);
        mapEndToStart.get(connection[1])?.push(connection[0]);
    }

    let res = 0;
    const queue = [0];
    const visited: Set<number> = new Set([0]);
    while (queue.length) {
        const num = queue.shift()!;
        for (let start of mapEndToStart.get(num) || []) {
            if (visited.has(start)) continue;

            queue.push(start);
            visited.add(start);
        }
        for (let end of mapStartToEnd.get(num) || []) {
            if (visited.has(end)) continue;

            queue.push(end);
            visited.add(end);
            res++;
        }
    }
    return res;
};

console.log(minReorder(6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]));