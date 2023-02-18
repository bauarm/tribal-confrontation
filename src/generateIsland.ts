/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { minmaxRand } from "./Helpers.js";

function fillArrWorld(scale:number = 16):Array<any> {
  const arr:Array<any> = [];
  for (let i:number = 0; i < scale; i += 1) {
    arr[i] = (new Array(scale)).fill(0);
    for (let j:number = 0; j < scale; j += 1) {
      arr[i][j] = [-1, 0, 0];
    }
  }
  return arr;
}

function makeGround(scale:number = 16):Array<any> {
  const arr:Array<any> = fillArrWorld(scale);
  for (let i:number = 1; i < scale - 1; i += 1) {
    const startPoint:number = Math.floor(minmaxRand(1, 3));
    const endPoint:number = Math.floor(minmaxRand((scale - 3), scale - 1));
    for (let j:number = startPoint; j < endPoint; j += 1) {
      arr[j][i][0] = 0;
    }
  }
  for (let q:number = 1; q < scale - 1; q += 1) {
    const passStep = minmaxRand(0, 3);
    if (passStep === 0) arr[q][1][0] = -1;
    if (passStep === 1) arr[q][scale - 2][0] = -1;
  }
  return arr;
}

function getMatrixArea(matrix:Array<any>, x:number, y:number, size:number):void {
  for (let i:number = x; i < x + size; i += 1) {
    for (let j:number = y; j < y + size; j += 1) {
      if (matrix[i][j][0] === 0) {
        // eslint-disable-next-line no-param-reassign
        matrix[i][j][0] = minmaxRand(1, 10);
      }
    }
  }
}

function setAreasQuality(matrix:Array<any>, score:number, quantity:number):void {
  for (let i:number = 0; i < matrix.length; i += 1) {
    for (let j:number = 0; j < matrix.length; j += 1) {
      if (matrix[i][j][0] >= 0) {
        matrix[i][j][0] = minmaxRand(1, 10);
      }
    }
  }
}

function mapMatrix(matrix:Array<any>, pos:number, callback:any) {
  // const newArray:any = matrix;
  for (let i:number = 0; i < matrix.length; i += 1) {
    for (let j:number = 0; j < matrix.length; j += 1) {
      // eslint-disable-next-line no-param-reassign
      matrix[i][j][pos] = (callback(matrix[i][j][pos]));
    }
  }
}
// mapMatrix(arr, 0, (item: number) => item + 100);

/**
* @param score Score wanted area
* @param mark Include or exclude area with score argue from selection
*/
function mapFilterMatrix(matrix:Array<any>, pos:number, score:number, mark:boolean, callback:any) {
  for (let i:number = 0; i < matrix.length; i += 1) {
    for (let j:number = 0; j < matrix.length; j += 1) {
      if (mark) {
        if (matrix[i][j][pos] === score) {
          console.log("mark");
          // eslint-disable-next-line no-param-reassign
          matrix[i][j][pos] = (callback(matrix[i][j][pos]));
        }
      }
      if (!mark) {
        if (matrix[i][j][pos] !== score) {
          console.log("nomark");
          // eslint-disable-next-line no-param-reassign
          matrix[i][j][pos] = (callback(matrix[i][j][pos]));
        }
      }
    }
  }
}

// mapFilterMatrix(arr, 0, 0, true, (item: number) => item + 100);

function generateRegions(scale:number = 17):Array<any> {
  const matrix = makeGround(scale);
  const regionSize:number = Math.floor(scale / 2);
  const steps = [[0, 0], [regionSize, 0], [0, regionSize], [regionSize, regionSize]];
  for (let i:number = 0; i < 4; i += 1) {
    getMatrixArea(matrix, steps[i][0], steps[i][1], regionSize);
  }
  return matrix;
}
/**
* @param scale Size generate area, only odd
*/
export default function generateIsland(scale:number) {
  return generateRegions(scale);
}
