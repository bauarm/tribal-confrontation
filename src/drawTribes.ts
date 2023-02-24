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

function findTribesAttr(trabesName:string, tribesArr:Array<any>):Array<any> {
  const tribeAttr:Array<any> = [];
  for (let i:number = 0; i < tribesArr.length; i += 1) {
    if (tribesArr[i][0] === trabesName) {
      tribeAttr.push(tribesArr[i][1], tribesArr[i][3]);
    }
  }
  return tribeAttr;
}

export default function drawFirstTribes(IslandWithTribes:Array<any>, tribesArr:Array<any>):void {
  for (let i:number = 0; i < IslandWithTribes.length; i += 1) {
    for (let j:number = 0; j < IslandWithTribes.length; j += 1) {
      if (IslandWithTribes[i][j][1] !== 0) {
        const tribeAttr = findTribesAttr(IslandWithTribes[i][j][1], tribesArr);
        rect(i * grid, j * grid, grid - 1, grid - 1, tribeAttr[0]);
        writeText(i, j, IslandWithTribes[i][j][1]);
        ctx.drawImage(tribeAttr[1], i * grid + 5, j * grid, grid - 10, grid - 10);
        // setTribesFirstCord(tribesArr, [i, j]);
        // const color = tribesArr.filter((tribeName) => tribeName[0] === IslandWithTribes[i][j][0]);
        console.log(tribeAttr[1]);
      }
    }
  }
  console.log(tribesArr);
}
