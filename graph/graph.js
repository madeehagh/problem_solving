import {bfs} from "./BFS.js";
import {dfs} from "./DFS.js";

const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
}

//Given start node, find path taken to reach end point
//bfs(graph, 'A');

dfs(graph, 'B');