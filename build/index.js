var _a, _b;
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { getId, minmaxRand } from "./Helpers.js";
import { game, setPaused } from "./Animation.js";
import generateIsland from "./generateIsland.js";
import drawIsland from "./drawIsland.js";
import staticForFieldScores from "./staticForIsland.js";
import generateTribes from "./generateTrabes.js";
// import { makeTime } from "./calendar";
game();
(_a = document.querySelector("#pauseBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => setPaused());
const canvas = getId("canvas");
const grid = 32;
const sizeField = 16;
const sizeSceneX = grid * sizeField;
const sizeSceneY = grid * sizeField;
canvas.width = sizeSceneX;
canvas.height = sizeSceneY;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(128, 128, 0)";
ctx.fillRect(0, 0, sizeSceneX, sizeSceneY);
const arr = generateIsland(sizeField);
drawIsland(arr);
const rect = (x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
};
function writeText(i, j, count, listTrb) {
    ctx.font = "9px Ubuntu";
    ctx.fillStyle = "white";
    ctx.fillText(listTrb[count][0], i * grid + 2, j * grid + 28);
}
console.log(staticForFieldScores(arr));
console.log(`Num of best fields ${staticForFieldScores(arr)[10]}`);
console.log(`Num of worse fields ${staticForFieldScores(arr)[1]}`);
const numberOftribes = 8;
const allTribes = generateTribes(arr, numberOftribes);
console.log(allTribes);
//-----
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
    const newMatrix = regionArr;
    let row = 0;
    let col;
    for (let i = x; i < x + size; i += 1) {
        col = 0;
        for (let j = y; j < y + size; j += 1) {
            // eslint-disable-next-line prefer-destructuring, no-param-reassign
            newMatrix[i][j][1] = regTribes[row][col][1];
            col += 1;
        }
        row += 1;
    }
    return newMatrix;
}
function generateRegions(islandArr, tribesArr, scale = 16) {
    const islndArr = islandArr;
    const regionSize = Math.floor(scale / 2);
    const steps = [[0, 0], [regionSize, 0], [0, regionSize], [regionSize, regionSize]];
    const trbArr = tribesArr;
    let chankLimiter = 0;
    for (let i = 0; i < 4; i += 1) {
        const tribesChank = trbArr.slice(chankLimiter, chankLimiter + 2);
        const EmptyQuartArr = getMatrixArea(islndArr, steps[i][0], steps[i][1], regionSize);
        const arrRegWithTribes = setTrabesTest(EmptyQuartArr, tribesChank);
        const arrIslWithTribes = setRegionWithTrabes(islndArr, arrRegWithTribes, steps[i][0], steps[i][1], regionSize);
        chankLimiter += 2;
        console.log(arrIslWithTribes);
    }
    return islndArr;
}
//----
generateRegions(arr, allTribes, 16);
function setTribes() {
    let count = 0;
    let passStep = 0;
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length; j += 1) {
            passStep = minmaxRand(0, 1);
            if (arr[i][j][0] > 9 && arr[i][j][1] === 0 && count < allTribes.length && passStep === 0) {
                const tribeList = allTribes[count][0];
                arr[i][j][1] = tribeList;
                allTribes[count][2][0] = i;
                allTribes[count][2][1] = j;
                rect(i * grid, j * grid, grid - 1, grid - 1, allTribes[count][1]);
                writeText(i, j, count, allTribes);
                ctx.drawImage(allTribes[count][3], i * grid + 5, j * grid, grid - 10, grid - 10);
                count += 1;
            }
        }
    }
    console.log(arr);
}
(_b = document.querySelector("#setTribes")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => setTribes());
// console.log(allTribes);
