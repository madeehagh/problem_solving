//https://leetcode.com/problems/compact-object/editorial/?envType=study-plan-v2&envId=30-days-of-javascript
const compactObject = function(obj) {
    function dfs(obj) {
        if(!obj)
            return false;
        if (typeof obj != "object")
            return obj;

        if (Array.isArray(obj)) {
            const resArr = [];
            for (const currObj of obj) {
                const validObj = dfs(currObj);
                if (validObj)
                    resArr.push(validObj);
            }
            return resArr;
        }

        const newObj = {};
        for (const currKey in obj) {
            const subRes = dfs(obj[currKey]);
            if (subRes)
                newObj[currKey] = subRes;
        }
        return newObj;
    }

   return  dfs(obj);
};

const obj = {"a": null, "b": [false, 1]};
console.log(compactObject(obj));