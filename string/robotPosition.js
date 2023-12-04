//https://leetcode.com/problems/robot-return-to-origin/description/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const charArray = Array.from(moves);
    let x = 0;
    let y = 0;
    for (const currentChar of charArray) {

        switch (currentChar) {
            case 'L':
                x--;
                break;
            case 'R':
                x++;
                break;
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;
        }
    }
    return x===0 && y===0;
};


const moveTest1 = "UD";
console.log(judgeCircle(moveTest1));
const moveTest2 = "LL";
console.log(judgeCircle(moveTest2));