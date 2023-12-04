//https://leetcode.com/problems/compact-object/editorial/?envType=study-plan-v2&envId=30-days-of-javascript
const compactObject = function(obj) {
    let res = [];
    if(!obj)
        return false;

    const removeFalseData = (obj) => {

        obj.forEach(item) {
            if(Array.isArray(item)) {
                removeFalseData(item);
            } else if (item !== null && item !==0 && item !== false){
                res.push(item);
            }
        }
        console.log(res)
        return res;
    }

    removeFalseData(obj);
};

const obj = {"a": null, "b": [false, 1]};
compactObject(obj);