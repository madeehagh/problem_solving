export function bfs(graph, start) {
    const queue = [start];
    const visited = new Set();
    const result = [];

    while (queue.length) {
        const node = queue.shift();

        if(!visited.has(node)) {
            visited.add(node);
            result.push(node);

            for (const neighborNode of graph[node]) {
                queue.push(neighborNode);
            }
        }
    }
    return result;
}