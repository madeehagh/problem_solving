// https://leetcode.com/problems/flatten-deeply-nested-array/?envType=study-plan-v2&envId=30-days-of-javascript
const flattenJson = function (arr, n) {
    let res = [];

    const flattening = (arr, n) => {
        for (const num of arr) {
            if (Array.isArray(num) && n > 0) {
                flattening(num, n - 1);
            } else {
                res.push(num);
            }
        }
    }
    flattening(arr, n);
    console.log("res", res);
    return res;
}

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
const n = 0;

flattenJson(arr, n);