function makeConnected(n: number, connections: number[][]): number {
    if (connections.length < n - 1) return -1;

    const nodes: Set<number> = new Set();
    for (let i = 0; i < n; i++) nodes.add(i);

    const edges: Map<number, Set<number>> = new Map();
    for (let connection of connections) {
        if (!edges.has(connection[0])) edges.set(connection[0], new Set());
        if (!edges.has(connection[1])) edges.set(connection[1], new Set());

        edges.get(connection[0])?.add(connection[1]);
        edges.get(connection[1])?.add(connection[0]);
    }

    let graphCnt = 0;
    for (let node of nodes) {
        graphCnt++;
        nodes.delete(node);
        const queue: Array<number> = [node];
        while (queue.length) {
            const start = queue.shift()!;
            for (let target of edges.get(start) || []) {
                if (!nodes.has(target)) continue;

                queue.push(target);
                nodes.delete(target);
            }
        }
    }

    return graphCnt - 1;
};

console.log(makeConnected(4, [[0, 1], [0, 2], [1, 2]]));
console.log(makeConnected(6, [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3]]));
console.log(makeConnected(6, [[0, 1], [0, 2], [0, 3], [1, 2]]));