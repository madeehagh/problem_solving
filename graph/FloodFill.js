//https://leetcode.com/problems/flood-fill/editorial/


const isValidMove = (image, sr, sc) => {
    return !(sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length);

};
const dfs = (image, sr, sc, newColor, currColor) => {
   // const isValidCell = isValidMove(image, sr, sc);
    //if (isValidCell) {
        if(image[sr][sc] === currColor) {
            image[sr][sc] = newColor;
            if (sr >= 1) dfs(image, sr-1, sc, newColor, currColor);
            if (sc >= 1) dfs(image, sr, sc-1, newColor, currColor);
            if (sr < image.length - 1) dfs(image, sr+1, sc, newColor, currColor);
            if (sc < image[0].length - 1)dfs(image, sr, sc+1, newColor, currColor);
        }
    //}
};

const bfs = (image, sr, sc, newColor) => {
    const currColor = image[sr][sc];
    const queue = [[sr, sc]];

    while (queue.length) {
        let [row, col] =queue.shift();
        if (isValidMove(image, row, col) && image[row][col] === currColor) {
                image[row][col] = newColor;
                queue.push([row -1, col]);
                queue.push([row +1, col]);
                queue.push([row, col-1]);
                queue.push([row, col+1]);
        }
    }
}
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, newColor) {
    const currColor = image[sr][sc];
    if (currColor != newColor)
        bfs(image, sr, sc, color);
        //dfs(image, sr , sc, newColor, currColor);
    return image;
};

const image = [[1,1,1],[1,1,0],[1,0,1]];
const sr = 1;
const sc = 1;
const color = 2;

floodFill(image, sr, sc, color);
