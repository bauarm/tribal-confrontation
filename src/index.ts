/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { getId, minmaxRand } from "./Helpers.js";
import { game, setPaused } from "./Animation.js";
import { generateTribes } from "./makeTribes.js";
// import { makeTime } from "./calendar";

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

function fillArrWorld(scale:number = 17):Array<any> {
  const arr:Array<any> = [];
  for (let i:number = 0; i < scale; i += 1) {
    arr[i] = (new Array(scale)).fill(0);
    for (let j:number = 0; j < scale; j += 1) {
      arr[i][j] = [0, 0, 0];
    }
  }
  return arr;
}

function fillMatrix(scale:number = 17):Array<any> {
  const arr:Array<any> = fillArrWorld(sizeField);
  for (let i:number = 1; i < scale - 1; i += 1) {
    const startPoint:number = Math.floor(minmaxRand(1, 4));
    const endPoint:number = Math.floor(minmaxRand((scale - 5), scale - 1));
    for (let j:number = startPoint; j < endPoint; j += 1) {
      arr[i][j] = [minmaxRand(1, 10), 0];
    }
  }
  return arr;
}

const arr = fillMatrix(sizeField);
console.log(arr);

const rect = (x:number, y:number, w:number, h:number, color:string):void => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};

function drawField(matrix:Array<any>):void {
  for (let i:number = 0; i < matrix.length; i += 1) {
    for (let j:number = 0; j < matrix.length; j += 1) {
      ctx.strokeStyle = "white";
      ctx.strokeRect(i * grid, j * grid, grid, grid);
      ctx.font = "12px Ubuntu";
      // eslint-disable-next-line no-unused-expressions
      arr[i][j][0] === 10 ? ctx.fillStyle = "blue" : ctx.fillStyle = "red";
      if (arr[i][j][0] === 10) {
        rect(i * grid, j * grid, grid, grid, "rgb(0, 153, 0)");
        ctx.fillStyle = "blue";
      } else if (arr[i][j][0] === 0) {
        rect(i * grid, j * grid, grid, grid, "rgb(0, 128, 255)");
        ctx.fillStyle = "blue";
      } else if (arr[i][j][0] < 3 && arr[i][j][0] !== 0) {
        rect(i * grid, j * grid, grid, grid, "rgb(204, 204, 0)");
        ctx.fillStyle = "white";
      } else if (arr[i][j][0] > 2 && arr[i][j][0] < 10) {
        rect(i * grid, j * grid, grid, grid, "rgb(102, 153, 0)");
        ctx.fillStyle = "white";
      }
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
  console.log(`Num of tribal in this world ${Math.floor(count / 3)}`);
  return Math.floor(count / 3);
}
//countBestFields(arr);

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
