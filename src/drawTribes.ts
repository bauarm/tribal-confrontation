// eslint-disable-next-line import/no-unresolved, import/extensions
import { ctx, grid } from "./global.js";

const rect = (x:number, y:number, w:number, h:number, color:string):void => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};

function writeText(i:number, j:number, text:string):void {
  ctx.font = "9px Ubuntu";
  ctx.fillStyle = "white";
  ctx.fillText(text, i * grid + 2, j * grid + 28);
}

function getTribesColor(trabesName:string, tribesArr:Array<any>):string {
  for (let i:number = 0; i < tribesArr.length; i += 1) {
    if (tribesArr[i][0] === trabesName) {
      return tribesArr[i][1];
    }
  }
  return "red";
}

function getFlag(name:string) {
  return new Promise((resolve) => {
    const pathTemplate = `accets/${name}.svg`;
    const elem = new Image();
    elem.src = pathTemplate;
    elem.onload = () => resolve(elem);
  });
}

async function drawElem(name:string, a:number, b:number, c:number, d:number) {
  const elem = await getFlag(name);
  return ctx.drawImage(elem, a, b, c, d);
}

export default function drawFirstTribes(IslandWithTribes:Array<any>, tribesArr:Array<any>):void {
  for (let i:number = 0; i < IslandWithTribes.length; i += 1) {
    for (let j:number = 0; j < IslandWithTribes.length; j += 1) {
      if (IslandWithTribes[i][j][1] !== 0) {
        const tribeColor = getTribesColor(IslandWithTribes[i][j][1], tribesArr);
        rect(i * grid, j * grid, grid - 1, grid - 1, tribeColor);
        writeText(i, j, IslandWithTribes[i][j][1]);
        drawElem(IslandWithTribes[i][j][1], i * grid + 5, j * grid, grid - 10, grid - 10);
      }
    }
  }
}
