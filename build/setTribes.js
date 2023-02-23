function getMatrixArea(matrix, x, y, size) {
    const newArray = [];
    let cnt = 0;
    for (let i = x; i < x + size; i += 1) {
        newArray.push([]);
        for (let j = y; j < y + size; j += 1) {
            newArray[cnt].push(matrix[i][j]);
        }
        cnt += 1;
    }
    return newArray;
}
function setTrabesTest(regionArr, tribesArr) {
    const regArray = regionArr;
    let counter = tribesArr.length;
    let countChank = 0;
    for (let i = 0; i < regArray.length; i += 1) {
        for (let j = 0; j < regArray.length; j += 1) {
            if (counter !== 0 && regArray[i][j][0] === 10) {
                // eslint-disable-next-line prefer-destructuring
                regArray[i][j][1] = tribesArr[countChank][0];
                counter -= 1;
                countChank += 1;
            }
        }
    }
    return regArray;
}
// eslint-disable-next-line max-len
function setRegionWithTrabes(regionArr, regTribes, x, y, size) {
    let row = 0;
    let col;
    for (let i = x; i < x + size; i += 1) {
        col = 0;
        for (let j = y; j < y + size; j += 1) {
            // eslint-disable-next-line prefer-destructuring, no-param-reassign
            regionArr[i][j][1] = regTribes[row][col][1];
            col += 1;
        }
        row += 1;
    }
}
export default function generateIslandWithTribes(trabesAttr) {
    const islndArr = trabesAttr.islandArr;
    const regionSize = Math.floor(trabesAttr.scale / 2);
    const steps = [[0, 0], [regionSize, 0], [0, regionSize], [regionSize, regionSize]];
    const trbArr = trabesAttr.tribesArr;
    let chankLimiter = 0;
    for (let i = 0; i < 4; i += 1) {
        const tribesChank = trbArr.slice(chankLimiter, chankLimiter + 2);
        const EmptyQuartArr = getMatrixArea(islndArr, steps[i][0], steps[i][1], regionSize);
        const arrRegWithTribes = setTrabesTest(EmptyQuartArr, tribesChank);
        setRegionWithTrabes(islndArr, arrRegWithTribes, steps[i][0], steps[i][1], regionSize);
        chankLimiter += 2;
    }
    return islndArr;
}
