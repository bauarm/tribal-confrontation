/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { minmaxRand } from "./Helpers.js";

const allTribesColor = [[255, 0, 0], [139, 0, 0], [199, 21, 133], [255, 69, 0], [139, 69, 19],
  [102, 51, 153], [255, 0, 255], [25, 25, 112], [47, 79, 79], [0, 100, 0]];
const allTotemNames = ["bears", "beavers", "boars", "deers", "fishes", "foxes", "horses", "hares", "ravens", "swifts", "wolfes"];

function getTribeAttributtes(atributes:Array<any>, numOftribes:number):Array<any> {
  const trabesAttr:Array<any> = [];
  while (trabesAttr.length < numOftribes) {
    const randAttr = atributes[minmaxRand(0, atributes.length - 1)];
    if (trabesAttr.indexOf(randAttr) === -1) {
      trabesAttr.push(randAttr);
    }
  }
  return trabesAttr;
}

function formRgbaString(rgb:Array<number>):string {
  const r:number = rgb[0];
  const g:number = rgb[1];
  const b:number = rgb[2];
  const color:string = `rgba(${r}, ${g} ,${b}, 255)`;
  return color;
}

export default function generateTrabes(matrix:Array<any>, numOftribes:number):Array<any> {
  const tribal:Array<any> = [];
  const tribesColor:Array<any> = getTribeAttributtes(allTribesColor, numOftribes);
  const tribesTotemNames:Array<string> = getTribeAttributtes(allTotemNames, numOftribes);
  for (let i:number = 0; i < numOftribes; i += 1) {
    tribal.push([]);
    tribal[i].push(tribesTotemNames[i]);
    tribal[i].push(formRgbaString(tribesColor[i]));
    tribal[i].push([0, 0]);
  }
  return tribal;
}
