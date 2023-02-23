/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { getId, minmaxRand } from "./Helpers.js";
import { game, setPaused } from "./Animation.js";
import generateIsland from "./generateIsland.js";
import drawIsland from "./drawIsland.js";
import staticForFieldScores from "./staticForIsland.js";
import generateTribes from "./generateTrabes.js";
import generateIslandWithTribes from "./setTribes.js";
import drawFirstTribes from "./drawTribes.js";

game();
document.querySelector("#pauseBtn")?.addEventListener("click", () => setPaused());

const canvas = getId("canvas");

const grid:number = 32;
const sizeField:number = 16;

const sizeSceneX:number = grid * sizeField;
const sizeSceneY:number = grid * sizeField;

canvas.width = sizeSceneX;
canvas.height = sizeSceneY;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(128, 128, 0)";
ctx.fillRect(0, 0, sizeSceneX, sizeSceneY);

const arr = generateIsland(sizeField);

drawIsland(arr);

const rect = (x:number, y:number, w:number, h:number, color:string):void => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};

function writeText(i:number, j:number, count:number, listTrb:Array<any>):void {
  ctx.font = "9px Ubuntu";
  ctx.fillStyle = "white";
  ctx.fillText(listTrb[count][0], i * grid + 2, j * grid + 28);
}

console.log(staticForFieldScores(arr));
console.log(`Num of best fields ${staticForFieldScores(arr)[10]}`);
console.log(`Num of worse fields ${staticForFieldScores(arr)[1]}`);

const numberOftribes = 8;
const allTribes:Array<any> = generateTribes(arr, numberOftribes);
console.log(allTribes);

const setTribesAttr = {
  islandArr: arr,
  tribesArr: allTribes,
  scale: sizeField,
};

const islandWithFirstTribes = generateIslandWithTribes(setTribesAttr);
console.log("isl", islandWithFirstTribes);

drawFirstTribes(islandWithFirstTribes, allTribes);

function setTribes():void {
  let count:number = 0;
  let passStep:number = 0;
  for (let i:number = 0; i < arr.length; i += 1) {
    for (let j:number = 0; j < arr.length; j += 1) {
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

document.querySelector("#setTribes")?.addEventListener("click", () => setTribes());

// console.log(allTribes);
