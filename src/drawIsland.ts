/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { getId } from "./Helpers.js";

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
      matrix[i][j][0] === 10 ? ctx.fillStyle = "blue" : ctx.fillStyle = "red";
      if (matrix[i][j][0] === 10) {
        rect(i * grid, j * grid, grid, grid, "rgb(0, 153, 0)");
        ctx.fillStyle = "blue";
      } else if (matrix[i][j][0] === -1) {
        rect(i * grid, j * grid, grid, grid, "rgb(0, 128, 255)");
        ctx.fillStyle = "blue";
      } else if (matrix[i][j][0] < 3 && matrix[i][j][0] !== 0) {
        rect(i * grid, j * grid, grid, grid, "rgb(204, 204, 0)");
        ctx.fillStyle = "white";
      } else if (matrix[i][j][0] > 2 && matrix[i][j][0] < 10) {
        rect(i * grid, j * grid, grid, grid, "rgb(102, 153, 0)");
        ctx.fillStyle = "white";
      }
      ctx.fillText(matrix[i][j][0], i * grid + 10, j * grid + 18);
    }
  }
}

export default function drawIsland(matrix:Array<any>):void {
  return drawField(matrix);
}
