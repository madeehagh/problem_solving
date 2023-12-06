export function dfs(graph, start) {
    const stack = [start];
    const visited = new Set();
    const result = [];

    while (stack.length) {
        const node = stack.shift();

        if (!visited.has(node)) {
            result.push(node);
            visited.add(node);

            for (const neighbourNode of graph[node]) {
                stack.push(neighbourNode);
            }
        }
    }
    return result;
}