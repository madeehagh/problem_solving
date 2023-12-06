//https://leetcode.com/problems/number-of-provinces/solutions/2111127/dfs-javascript/
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function(isConnected) {
    let provinces = 0;
    const visitedCities = new Set();

    for(let i =0; i< isConnected.length; i++){
        if(!visitedCities.has(i)){
            provinces++;
            visitedCities.add(i);
            //visitNeighborDFS(i, isConnected, visitedCities);
            visitNeighborBFS(i, isConnected, visitedCities);
        }
    }
    console.log(provinces)
    return provinces;
};

const visitNeighborDFS = function(cityRowIndex, isConnected, visitedCities){
    for(let i =0; i< isConnected[cityRowIndex].length; i++){
        if(!visitedCities.has(i) && isConnected[cityRowIndex][i] === 1){
            visitedCities.add(i);
            visitNeighborDFS(i, isConnected, visitedCities);
        }
    }
}

const visitNeighborBFS = function(cityRowIndex, isConnected, visitedCities) {

    const queue = [cityRowIndex];

    while (queue.length) {
        const currentCity = queue.shift();
        for (let neighbor = 0; neighbor < isConnected.length; neighbor++) {
            if (isConnected[cityRowIndex][neighbor] === 1 && !visitedCities.has(neighbor)) {
                queue.push(neighbor);
                visitedCities.add(neighbor);
            }
        }
    }

}

const isConnected = [[1,1,0],[1,1,0],[0,0,1]]//[[1,1,0],[1,1,0],[0,0,1]];

findCircleNum(isConnected);