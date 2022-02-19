/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { getId, minmaxRand } from "./Helpers.js";
import { game, setPaused } from "./Animation.js";
import { generateTribes } from "./makeTribes.js";
import { makeTime } from "./calendar";

game();
document.querySelector("#pauseBtn")?.addEventListener("click", () => setPaused());

const canvas = getId("canvas");

const grid:number = 32;
const sizeField:number = 17;

const sizeSceneX:number = grid * sizeField;
const sizeSceneY:number = grid * sizeField;

canvas.width = sizeSceneX;
canvas.height = sizeSceneY;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(128, 128, 0)";
ctx.fillRect(0, 0, sizeSceneX, sizeSceneY);

function fillMatrix(scale:number = 17):Array<any> {
  const arr:Array<any> = [];
  for (let i:number = 0; i < scale; i += 1) {
    arr[i] = (new Array(scale)).fill(0);
    for (let j:number = 0; j < scale; j += 1) {
      if (j > 0 && i > 0 && j < scale - 1 && i < scale - 1) {
        arr[i][j] = [minmaxRand(1, 10), 0];
      } else { arr[i][j] = [0, 0]; }
    }
  }
  return arr;
}
const arr = fillMatrix(sizeField);
console.log(arr);
function drawField(matrix:Array<any>):void {
  for (let i:number = 0; i < matrix.length; i += 1) {
    for (let j:number = 0; j < matrix.length; j += 1) {
      ctx.strokeStyle = "white";
      ctx.strokeRect(i * grid, j * grid, grid, grid);
      ctx.font = "12px Ubuntu";
      // eslint-disable-next-line no-unused-expressions
      arr[i][j][0] === 10 ? ctx.fillStyle = "blue" : ctx.fillStyle = "red";
      ctx.fillText(arr[i][j][0], i * grid + 10, j * grid + 18);
    }
  }
}

drawField(arr);

function countBestFields(matrix:Array<any>):number {
  let count = 0;
  for (let i:number = 0; i < matrix.length; i += 1) {
    for (let j:number = 0; j < matrix.length; j += 1) {
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

const allTribes:Array<any> = [];
function makeAllTribes():void {
  const bestFields:number = countBestFields(arr);
  for (let i:number = 0; i < bestFields; i += 1) {
    allTribes.push(generateTribes());
  }
}
makeAllTribes();

function setTribes():void {
  let count:number = 0;
  let passStep:number = 0;
  for (let i:number = 2; i < arr.length - 2; i += 1) {
    for (let j:number = 2; j < arr.length - 2; j += 1) {
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
document.querySelector("#setTribes")?.addEventListener("click", () => setTribes());

console.log(allTribes);
