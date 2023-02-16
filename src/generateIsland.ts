/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { minmaxRand } from "./Helpers.js";

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
//  функция будет только рисовать остров переделать
function makeGround(scale:number = 17):Array<any> {
  const arr:Array<any> = fillArrWorld(scale);
  for (let i:number = 1; i < scale - 1; i += 1) {
    const startPoint:number = Math.floor(minmaxRand(1, 3));
    const endPoint:number = Math.floor(minmaxRand((scale - 3), scale - 1));
    for (let j:number = startPoint; j < endPoint; j += 1) {
      arr[j][i][0] = minmaxRand(1, 10);
    }
  }
  for (let q:number = 1; q < scale - 1; q += 1) {
    arr[q][1][0] = minmaxRand(0, 4);
    arr[q][scale - 2][0] = minmaxRand(0, 4);
  }
  return arr;
}

function getMatrixArea(matrix:Array<any>, x:number, y:number, size:number):void {
  for (let i:number = x; i < x + size; i += 1) {
    for (let j:number = y; j < y + size; j += 1) {
      // eslint-disable-next-line no-param-reassign
      if (matrix[i][j][0] !== 0) {
        // eslint-disable-next-line no-param-reassign
        matrix[i][j][0] = minmaxRand(1, 10);
      }
    }
  }
}

function generateRegions(scale:number = 17):Array<any> {
  const matrix = makeGround(scale);
  const regionSize:number = Math.floor(scale / 2);
  const steps = [[0, 0], [regionSize, 0], [0, regionSize], [regionSize, regionSize]];
  for (let i:number = 0; i < 4; i += 1) {
    getMatrixArea(matrix, steps[i][0], steps[i][1], regionSize);
  }
  return matrix;
}

export default function generateIsland(scale:number) {
  return generateRegions(scale);
}
