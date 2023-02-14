/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { getId, minmaxRand } from "./Helpers.js";
const canvas = getId("canvas");
const grid = 32;
const sizeField = 17;
const sizeSceneX = grid * sizeField;
const sizeSceneY = grid * sizeField;
canvas.width = sizeSceneX;
canvas.height = sizeSceneY;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(128, 128, 0)";
ctx.fillRect(0, 0, sizeSceneX, sizeSceneY);
function fillArrWorld(scale = sizeField) {
    const arr = [];
    for (let i = 0; i < scale; i += 1) {
        arr[i] = (new Array(scale)).fill(0);
        for (let j = 0; j < scale; j += 1) {
            arr[i][j] = [0, 0, 0];
        }
    }
    return arr;
}
function fillMatrix(scale = 17) {
    const arr = fillArrWorld(sizeField);
    for (let i = 1; i < scale - 1; i += 1) {
        const startPoint = Math.floor(minmaxRand(1, 4));
        const endPoint = Math.floor(minmaxRand((scale - 5), scale - 1));
        for (let j = startPoint; j < endPoint; j += 1) {
            arr[i][j] = [minmaxRand(1, 10), 0];
        }
    }
    return arr;
}
const arr = fillMatrix(sizeField);
console.log(arr);
const rect = (x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
};
function drawField(matrix) {
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix.length; j += 1) {
            ctx.strokeStyle = "white";
            ctx.strokeRect(i * grid, j * grid, grid, grid);
            ctx.font = "12px Ubuntu";
            // eslint-disable-next-line no-unused-expressions
            arr[i][j][0] === 10 ? ctx.fillStyle = "blue" : ctx.fillStyle = "red";
            if (arr[i][j][0] === 10) {
                rect(i * grid, j * grid, grid, grid, "rgb(0, 153, 0)");
                ctx.fillStyle = "blue";
            }
            else if (arr[i][j][0] === 0) {
                rect(i * grid, j * grid, grid, grid, "rgb(0, 128, 255)");
                ctx.fillStyle = "blue";
            }
            else if (arr[i][j][0] < 3 && arr[i][j][0] !== 0) {
                rect(i * grid, j * grid, grid, grid, "rgb(204, 204, 0)");
                ctx.fillStyle = "white";
            }
            else if (arr[i][j][0] > 2 && arr[i][j][0] < 10) {
                rect(i * grid, j * grid, grid, grid, "rgb(102, 153, 0)");
                ctx.fillStyle = "white";
            }
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
    console.log(`Num of tribal in this world ${Math.floor(count / 3)}`);
    return Math.floor(count / 3);
}
// countBestFields(arr);
