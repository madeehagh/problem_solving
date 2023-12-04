
// https://leetcode.com/problems/join-two-arrays-by-id/?envType=study-plan-v2&envId=30-days-of-javascript
function merge(arr1, arr2) {
    const map = new Map();

    for(const obj of arr1)
        map.set(obj.id, obj);

    for(const obj of arr2) {
        if(!map.has(obj.id)) {
            map.set(obj.id, obj);
        } else {
            const prevObj = map.get(obj.id);
            for(const key of Object.keys(obj))
                prevObj[key] = obj[key];
        }
    }

    const array = Array.from(map.values());
    console.log(array);
    return array;
}

const arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
]
const arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
merge(arr1, arr2);