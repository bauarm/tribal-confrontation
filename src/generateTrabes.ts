/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { minmaxRand } from "./Helpers.js";

const allTribesColor = [[255, 0, 0], [139, 0, 0], [199, 21, 133], [255, 69, 0], [139, 69, 19],
  [102, 51, 153], [255, 0, 255], [25, 25, 112], [47, 79, 79], [0, 100, 0]];
const allTotemNames = ["bears", "beavers", "boars", "deers", "fishes", "foxes", "horses", "hares", "ravens", "swifts", "wolfes"]; // "fogs", "shakes"

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

function getImg(name:string):Array<any> {
  const img = new Image();
  const arrImg:Array<any> = [];
  img.src = `accets/${name}.svg`;
  arrImg.push(name);
  arrImg.push(img);
  return arrImg;
}

function getFlagsForAll(nameArr:Array<any>):Array<any> {
  const imgArr:Array<any> = [];
  let imgName:Array<any>;
  for (let i:number = 0; i < nameArr.length; i += 1) {
    imgName = getImg(nameArr[i]);
    imgArr.push(imgName);
  }
  return imgArr;
}

function setFlagsForName(nameArr:Array<string>, flagsImg:Array<any>):Array<any> {
  const newArray:Array<any> = [];
  for (let i:number = 0; i < nameArr.length; i += 1) {
    for (let j:number = 0; j < flagsImg.length; j += 1) {
      if (nameArr[i] === flagsImg[j][0]) {
        newArray.push(flagsImg[j][1]);
      }
    }
  }
  return newArray;
}

export default function generateTrabes(matrix:Array<any>, numOftribes:number):Array<any> {
  const tribals:Array<any> = [];
  const tribesColor:Array<any> = getTribeAttributtes(allTribesColor, numOftribes);
  const tribesTotemNames:Array<string> = getTribeAttributtes(allTotemNames, numOftribes);
  const allFlags = getFlagsForAll(allTotemNames);
  const changeFlags = (setFlagsForName(tribesTotemNames, allFlags));
  for (let i:number = 0; i < numOftribes; i += 1) {
    tribals.push([]);
    tribals[i].push(tribesTotemNames[i]);
    tribals[i].push(formRgbaString(tribesColor[i]));
    tribals[i].push([0, 0]);
    tribals[i].push(changeFlags[i]);
  }
  return tribals;
}
