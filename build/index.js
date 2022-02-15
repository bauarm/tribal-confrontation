var _a, _b;
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { getId, minmaxRand } from "./Helpers.js";
import { game, setPaused } from "./Animation.js";
import { generateTribes } from "./makeTribes.js";
game();
(_a = document.querySelector("#pauseBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => setPaused());
const canvas = getId("canvas");
const grid = 32;
const sizeField = 17;
const sizeSceneX = grid * sizeField;
const sizeSceneY = grid * sizeField;
canvas.width = sizeSceneX;
canvas.height = sizeSceneY;
const ctx = canvas.getContext("2d");
function fillMatrix(scale = 17) {
    const arr = [];
    for (let i = 0; i < scale; i += 1) {
        arr[i] = (new Array(scale)).fill(0);
        for (let j = 0; j < scale; j += 1) {
            if (j > 0 && i > 0 && j < scale - 1 && i < scale - 1) {
                arr[i][j] = [minmaxRand(1, 10), 0];
            }
            else {
                arr[i][j] = [0, 0];
            }
        }
    }
    return arr;
}
const arr = fillMatrix(sizeField);
console.log(arr);
function drawField(matrix) {
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix.length; j += 1) {
            ctx.strokeRect(i * grid, j * grid, grid, grid);
            ctx.font = "12px Ubuntu";
            // eslint-disable-next-line no-unused-expressions
            arr[i][j][0] === 10 ? ctx.fillStyle = "blue" : ctx.fillStyle = "red";
            ctx.fillText(arr[i][j][0], i * grid + 10, j * grid + 18);
        }
    }
}
drawField(arr);
function countBestFields(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix.length; j += 1) {
            if (arr[i][j][0] === 10) {
                count += 1;
            }
        }
    }
    console.log(`Num of best fields ${count}`);
    console.log(`Num of tribal in this world ${Math.floor(count / 5)}`);
    return Math.floor(count / 3);
}
countBestFields(arr);
const allTribes = [];
function makeAllTribes() {
    const bestFields = countBestFields(arr);
    for (let i = 0; i < bestFields; i += 1) {
        allTribes.push(generateTribes());
    }
}
makeAllTribes();
function setTribes() {
    let count = 0;
    let passStep = 0;
    for (let i = 2; i < arr.length - 2; i += 1) {
        for (let j = 2; j < arr.length - 2; j += 1) {
            passStep = minmaxRand(0, 1);
            if (arr[i][j][0] > 9 && arr[i][j][1] === 0 && count < allTribes.length && passStep === 0) {
                const tribeList = allTribes[count][1];
                arr[i][j][1] = tribeList;
                allTribes[count][2][0] = i;
                allTribes[count][2][1] = j;
                count += 1;
            }
        }
    }
    console.log(arr);
    console.log(allTribes);
}
(_b = document.querySelector("#setTribes")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => setTribes());
console.log(allTribes);
