//https://leetcode.com/problems/shortest-path-in-binary-matrix/description/
var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length;
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
        return -1;
    }

    const queue = [[0, 0, 1]];
    const visited = Array(n).fill(0).map(() => Array(n).fill(false));
    visited[0][0] = true;

    const directions = [[1, 0], [0, 1], [1, 1], [-1, 0], [0, -1], [1, -1], [-1, 1], [-1, -1]];

    while (queue.length) {
        let [row, col, distance] = queue.shift();

        if (row === n - 1 && col === n - 1) {
            return distance;
        }

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (newRow >= 0
                && newRow < n
                && newCol >= 0
                && newCol < n
                && grid[newRow][newCol] === 0
                && !visited[newRow][newCol]) {
                queue.push([newRow, newCol, distance + 1]);
                visited[newRow][newCol] = true;
            }
        }
    }

    return -1; // No valid clear path found
};

const dir = [[0,0,0],[1,1,0],[1,1,0]];
console.log(shortestPathBinaryMatrix(dir));