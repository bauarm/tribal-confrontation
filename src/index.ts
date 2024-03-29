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

// console.log(staticForFieldScores(arr));
console.log(`Num of best fields ${staticForFieldScores(arr)[10]}`);
console.log(`Num of worse fields ${staticForFieldScores(arr)[1]}`);

const numberOftribes = 8;
const allTribes:Array<any> = generateTribes(arr, numberOftribes);
console.log(allTribes);

function createGuitar(obj: any[]) {
  return {
    name: obj[0],
    color: obj[1],
    emblem: obj[2],
    cord: obj[3],
  };
}

function createGuitarFact(arrTrb: string | any[]) {
  const arrObj = [];
  for (let i:number = 0; i < arrTrb.length; i += 1) {
    arrObj.push(createGuitar(arrTrb[i]));
  }
  return arrObj;
}

const arrtest = createGuitarFact(allTribes);
arrtest[0].emblem.then((data: any) => ctx.drawImage(data, 0, 0, 32, 32));

const setTribesAttr = {
  islandArr: arr,
  tribesArr: allTribes,
  scale: sizeField,
};

const islandWithFirstTribes = generateIslandWithTribes(setTribesAttr);
// console.log("isl", islandWithFirstTribes);

drawFirstTribes(islandWithFirstTribes, allTribes);

// document.querySelector("#setTribes")?.addEventListener("click", () => setTribes());

// console.log(allTribes);

function getAreaAround(matrix:Array<any>, cordX:number, cordY:number) {
  const quantity:Array<number> = [];
  for (let i:number = cordX - 1; i < cordX + 2; i += 1) {
    for (let j:number = cordY - 1; j < cordY + 2; j += 1) {
      if (i === cordX && j !== cordY) {
        quantity.push(matrix[i][j][0]);
      }
      if (j === cordY && i !== cordX) {
        quantity.push(matrix[i][j][0]);
      }
    }
  }
  quantity.sort((a, b) => b - a);
  return quantity;
}

function makeStep(matrix:Array<any>, cordX:number, cordY:number) {
  const oldPlace:Array<number> = [];
  
}

canvas.addEventListener("click", (event: any) => {
  const x = Math.floor((event.clientX - canvas.offsetLeft) / grid);
  const y = Math.floor((event.clientY - canvas.offsetTop) / grid);
  console.log(getAreaAround(arr, x, y));
  console.log(`x - ${x} y - ${y}`, arr[x][y]);
});
