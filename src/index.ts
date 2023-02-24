/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { getId } from "./Helpers.js";
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

function tribesArrToObj(tribArr:Array<any>):void {
  const tribes = {};
  for (let i:number = 0; i < tribArr.length; i += 1) {
    console.log(tribArr[i]);
    for (let j:number = 0; j < tribArr[i].length; j += 1) {
      console.log(tribArr[i][j]);
    }
  }
}

// tribesArrToObj(allTribes);

// document.querySelector("#setTribes")?.addEventListener("click", () => setTribes());

// console.log(allTribes);
