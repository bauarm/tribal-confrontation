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

function setRandomScoreForAllArea(matrix:Array<any>):Array<any> {
  const newArray:Array<any> = matrix;
  const len = newArray.length;
  for (let i:number = 0; i < len; i += 1) {
    for (let j:number = 0; j < len; j += 1) {
      if (matrix[i][j][0] === 0) {
        newArray[i][j][0] = minmaxRand(1, 9);
      }
    }
  }
  return newArray;
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
  const finalArr = setRandomScoreForAllArea(arr);
  return finalArr;
}

function getMatrixArea(matrix:Array<any>, x:number, y:number, size:number):Array<any> {
  const newArray:Array<any> = [];
  let cnt:number = 0;
  for (let i:number = x; i < x + size; i += 1) {
    newArray.push([]);
    for (let j:number = y; j < y + size; j += 1) {
      newArray[cnt].push(matrix[i][j]);
    }
    cnt += 1;
  }
  return newArray;
}

// const arrFrag = getMatrixArea(arr, 0, 0, 8);

function setAreasQuality(matrix:Array<any>, score:number, quantity:number):Array<any> {
  const newArray:Array<any> = matrix;
  let qnt:number = quantity;
  while (qnt > 0) {
    for (let i:number = 0; i < matrix.length; i += 1) {
      for (let j:number = 0; j < matrix.length; j += 1) {
        const passStep = minmaxRand(0, 5);
        if (matrix[i][j][0] >= 0 && passStep === 3 && qnt > 0) {
          newArray[i][j][0] = score;
          qnt -= 1;
        }
      }
    }
  }
  return newArray;
}

// const arrFrag2 = setAreasQuality(arrFrag, 100, 3);

// eslint-disable-next-line max-len
function setMatrixArea(matrix:Array<any>, NewMatrix:Array<any>, x:number, y:number, size:number):void {
  let row:number = 0;
  let col:number;
  for (let i:number = x; i < x + size; i += 1) {
    col = 0;
    for (let j:number = y; j < y + size; j += 1) {
      // eslint-disable-next-line prefer-destructuring, no-param-reassign
      matrix[i][j][0] = NewMatrix[row][col][0];
      col += 1;
    }
    row += 1;
  }
}

// setMatrixArea(arr, arrFrag2, 0, 0, 8);

// eslint-disable-next-line no-unused-vars
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
// eslint-disable-next-line no-unused-vars
function mapFilterMatrix(matrix:Array<any>, pos:number, score:number, mark:boolean, callback:any) {
  for (let i:number = 0; i < matrix.length; i += 1) {
    for (let j:number = 0; j < matrix.length; j += 1) {
      if (mark) {
        if (matrix[i][j][pos] === score) {
          // eslint-disable-next-line no-param-reassign
          matrix[i][j][pos] = (callback(matrix[i][j][pos]));
        }
      }
      if (!mark) {
        if (matrix[i][j][pos] !== score) {
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
    const EmptyQuartArr = getMatrixArea(matrix, steps[i][0], steps[i][1], regionSize);
    const FullQuartArr = setAreasQuality(EmptyQuartArr, 10, 3);
    setMatrixArea(matrix, FullQuartArr, steps[i][0], steps[i][1], regionSize);
  }
  return matrix;
}
/**
* @param scale Size generate area, only odd
*/
export default function generateIsland(scale:number) {
  return generateRegions(scale);
}
