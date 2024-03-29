/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { minmaxRand } from "./Helpers.js";
function fillArrWorld(scale = 16) {
    const arr = [];
    for (let i = 0; i < scale; i += 1) {
        arr[i] = (new Array(scale)).fill(0);
        for (let j = 0; j < scale; j += 1) {
            arr[i][j] = [-1, 0, 0];
        }
    }
    return arr;
}
function setRandomScoreForAllArea(matrix) {
    const newArray = matrix;
    const len = newArray.length;
    for (let i = 0; i < len; i += 1) {
        for (let j = 0; j < len; j += 1) {
            if (matrix[i][j][0] === 0) {
                newArray[i][j][0] = minmaxRand(1, 9);
            }
        }
    }
    return newArray;
}
function makeGround(scale = 16) {
    const arr = fillArrWorld(scale);
    for (let i = 1; i < scale - 1; i += 1) {
        const startPoint = Math.floor(minmaxRand(1, 3));
        const endPoint = Math.floor(minmaxRand((scale - 3), scale - 1));
        for (let j = startPoint; j < endPoint; j += 1) {
            arr[j][i][0] = 0;
        }
    }
    for (let q = 1; q < scale - 1; q += 1) {
        const passStep = minmaxRand(0, 3);
        if (passStep === 0)
            arr[q][1][0] = -1;
        if (passStep === 1)
            arr[q][scale - 2][0] = -1;
    }
    const finalArr = setRandomScoreForAllArea(arr);
    return finalArr;
}
function getMatrixArea(matrix, x, y, size) {
    const newArray = [];
    let cnt = 0;
    for (let i = x; i < x + size - 1; i += 1) {
        newArray.push([]);
        for (let j = y; j < y + size; j += 1) {
            newArray[cnt].push(matrix[i][j]);
        }
        cnt += 1;
    }
    return newArray;
}
function setMiniAreasQuality(QuartRegionArr, pos, point) {
    let qnt = true;
    while (qnt) {
        for (let i = pos[0][0]; i < pos[0][1]; i += 1) {
            for (let j = pos[1][0]; j < pos[1][1]; j += 1) {
                const passStep = minmaxRand(0, 7);
                if (QuartRegionArr[i][j][0] >= 0 && passStep === 3 && qnt) {
                    QuartRegionArr[i][j][0] = point;
                    qnt = false;
                }
            }
        }
    }
}
function setAreasQuality(matrix, quantity) {
    const newArray = matrix;
    setMiniAreasQuality(newArray, [[0, 4], [0, 2]], quantity);
    setMiniAreasQuality(newArray, [[0, 4], [3, 5]], quantity);
    return newArray;
}
// const arrFrag2 = setAreasQuality(arrFrag, 100, 3);
// eslint-disable-next-line max-len
function setMatrixArea(matrix, NewMatrix, x, y, size) {
    let row = 0;
    let col;
    for (let i = x; i < x + size - 1; i += 1) {
        col = 0;
        for (let j = y; j < y + size; j += 1) {
            // eslint-disable-next-line prefer-destructuring, no-param-reassign
            matrix[i][j][0] = NewMatrix[row][col][0];
            col += 1;
        }
        row += 1;
    }
}
function generateRegions(scale = 17) {
    const matrix = makeGround(scale);
    const regionSize = Math.floor(scale / 2);
    const steps = [[3, 2], [regionSize + 1, 2], [3, regionSize + 1], [regionSize + 1, regionSize + 1]];
    for (let i = 0; i < 4; i += 1) {
        const EmptyQuartArr = getMatrixArea(matrix, steps[i][0], steps[i][1], 5);
        const FullQuartArr = setAreasQuality(EmptyQuartArr, 10);
        setMatrixArea(matrix, FullQuartArr, steps[i][0], steps[i][1], 5);
    }
    return matrix;
}
/**
* @param scale Size generate area, only odd
*/
export default function generateIsland(scale) {
    return generateRegions(scale);
}
