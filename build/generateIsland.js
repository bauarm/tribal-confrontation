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
    for (let i = x; i < x + size; i += 1) {
        newArray.push([]);
        for (let j = y; j < y + size; j += 1) {
            newArray[cnt].push(matrix[i][j]);
        }
        cnt += 1;
    }
    return newArray;
}
function setAreasQuality(matrix, score, quantity) {
    const newArray = matrix;
    let qnt = quantity;
    while (qnt > 0) {
        for (let i = 0; i < matrix.length; i += 1) {
            for (let j = 0; j < matrix.length; j += 1) {
                const passStep = minmaxRand(0, 7);
                if (matrix[i][j][0] >= 0 && passStep === 3 && qnt > 0) {
                    newArray[i][j][0] = score;
                    qnt -= 1;
                }
            }
        }
    }
    return newArray;
}
// const arrFrag2 = setAreasQuality(arrFrag, 100, 3);
// eslint-disable-next-line max-len
function setMatrixArea(matrix, NewMatrix, x, y, size) {
    let row = 0;
    let col;
    for (let i = x; i < x + size; i += 1) {
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
    const steps = [[0, 0], [regionSize, 0], [0, regionSize], [regionSize, regionSize]];
    for (let i = 0; i < 4; i += 1) {
        const EmptyQuartArr = getMatrixArea(matrix, steps[i][0], steps[i][1], regionSize);
        const FullQuartArr = setAreasQuality(EmptyQuartArr, 10, 2);
        setMatrixArea(matrix, FullQuartArr, steps[i][0], steps[i][1], regionSize);
    }
    return matrix;
}
/**
* @param scale Size generate area, only odd
*/
export default function generateIsland(scale) {
    return generateRegions(scale);
}
