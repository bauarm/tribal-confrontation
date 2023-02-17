/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { minmaxRand } from "./Helpers.js";
function fillArrWorld(scale = 17) {
    const arr = [];
    for (let i = 0; i < scale; i += 1) {
        arr[i] = (new Array(scale)).fill(0);
        for (let j = 0; j < scale; j += 1) {
            arr[i][j] = [0, 0, 0];
        }
    }
    return arr;
}
//  функция будет только рисовать остров переделать
function makeGround(scale = 17) {
    const arr = fillArrWorld(scale);
    for (let i = 1; i < scale - 1; i += 1) {
        const startPoint = Math.floor(minmaxRand(1, 3));
        const endPoint = Math.floor(minmaxRand((scale - 3), scale - 1));
        for (let j = startPoint; j < endPoint; j += 1) {
            arr[j][i][0] = minmaxRand(1, 10);
        }
    }
    for (let q = 1; q < scale - 1; q += 1) {
        arr[q][1][0] = minmaxRand(0, 4);
        arr[q][scale - 2][0] = minmaxRand(0, 4);
    }
    return arr;
}
function getMatrixArea(matrix, x, y, size) {
    for (let i = x; i < x + size; i += 1) {
        for (let j = y; j < y + size; j += 1) {
            // eslint-disable-next-line no-param-reassign
            if (matrix[i][j][0] !== 0) {
                // eslint-disable-next-line no-param-reassign
                matrix[i][j][0] = minmaxRand(1, 10);
            }
        }
    }
}
function setAreasQuality(matrix, score, quantity) {
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix.length; j += 1) {
            if (matrix[i][j][0] !== 0) {
                matrix[i][j][0] = minmaxRand(1, 10);
            }
        }
    }
}
function generateRegions(scale = 17) {
    const matrix = makeGround(scale);
    const regionSize = Math.floor(scale / 2);
    const steps = [[0, 0], [regionSize, 0], [0, regionSize], [regionSize, regionSize]];
    for (let i = 0; i < 4; i += 1) {
        getMatrixArea(matrix, steps[i][0], steps[i][1], regionSize);
    }
    return matrix;
}
export default function generateIsland(scale) {
    return generateRegions(scale);
}
