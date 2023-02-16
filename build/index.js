var _a, _b;
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
const sizeField = 20;
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
    // eslint-disable-next-line prefer-destructuring
    ctx.font = "9px Ubuntu";
    ctx.fillStyle = "white";
    ctx.fillText(listTrb[count][0], i * grid + 2, j * grid + 28);
}
function countBestFields(matrix, coef) {
    let count = 0;
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix.length; j += 1) {
            if (arr[i][j][0] === 10) {
                count += 1;
            }
        }
    }
    console.log(`Num of tribal in this world ${Math.floor(count / coef)}`);
    return Math.floor(count / 3);
}
console.log(staticForFieldScores(arr));
console.log(`Num of best fields ${staticForFieldScores(arr)[10]}`);
console.log(`Num of worse fields ${staticForFieldScores(arr)[1]}`);
const numberOftribes = countBestFields(arr, 3);
function getTribeFlag() {
    const img = new Image();
    img.src = "libs/deers.svg";
    return img;
}
const flag = getTribeFlag();
const allTribes = generateTribes(arr, numberOftribes);
function setTribes() {
    let count = 0;
    let passStep = 0;
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length; j += 1) {
            passStep = minmaxRand(0, 1);
            if (arr[i][j][0] > 9 && arr[i][j][1] === 0 && count < allTribes.length && passStep === 0) {
                const tribeList = allTribes[count][1];
                arr[i][j][1] = tribeList;
                allTribes[count][2][0] = i;
                allTribes[count][2][1] = j;
                rect(i * grid, j * grid, grid - 1, grid - 1, allTribes[count][1]);
                writeText(i, j, count, allTribes);
                ctx.drawImage(flag, i * grid + 5, j * grid, grid - 10, grid - 10);
                count += 1;
            }
        }
    }
}
(_b = document.querySelector("#setTribes")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => setTribes());
function getMatrixArea(matrix, x, y, size, color) {
    for (let i = x; i < x + size; i += 1) {
        for (let j = y; j < y + size; j += 1) {
            // eslint-disable-next-line no-param-reassign
            if (matrix[i][j][0] !== 0) {
                // eslint-disable-next-line no-param-reassign
                matrix[i][j][0] = 11;
                rect(i * grid, j * grid, grid - 1, grid - 1, color);
                console.log(matrix[i][j][0]);
            }
        }
    }
}
function generateRegions(scale = 17) {
    const regionSize = Math.floor(scale / 2);
    const colors = ["black", "blue", "green", "white"];
    const steps = [[0, 0], [regionSize, 0], [0, regionSize], [regionSize, regionSize]];
    for (let i = 0; i < 4; i += 1) {
        getMatrixArea(arr, steps[i][0], steps[i][1], regionSize, colors[i]);
    }
}
generateRegions(sizeField);
// getMatrixArea(arr, 9, 0, 9, "black");
console.log(allTribes);
console.log(arr);
