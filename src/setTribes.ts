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

function setTrabesTest(regionArr:Array<any>, tribesArr:Array<any>):Array<any> {
  const regArray:Array<any> = regionArr;
  let counter = tribesArr.length;
  let countChank = 0;
  for (let i:number = 0; i < regArray.length; i += 1) {
    for (let j:number = 0; j < regArray.length; j += 1) {
      if (counter !== 0 && regArray[i][j][0] === 10) {
        // eslint-disable-next-line prefer-destructuring
        regArray[i][j][1] = tribesArr[countChank][0];
        counter -= 1;
        countChank += 1;
      }
    }
  }
  return regArray;
}

// eslint-disable-next-line max-len
function setRegionWithTrabes(regionArr:Array<any>, regTribes:Array<any>, x:number, y:number, size:number):void {
  let row:number = 0;
  let col:number;
  for (let i:number = x; i < x + size; i += 1) {
    col = 0;
    for (let j:number = y; j < y + size; j += 1) {
      // eslint-disable-next-line prefer-destructuring, no-param-reassign
      regionArr[i][j][1] = regTribes[row][col][1];
      col += 1;
    }
    row += 1;
  }
}

interface setTrabes {
  islandArr:Array<any>;
  tribesArr:Array<any>;
  scale:number;
}

export default function generateIslandWithTribes(trabesAttr: setTrabes):Array<any> {
  const islndArr:Array<any> = trabesAttr.islandArr;
  const regionSize:number = Math.floor(trabesAttr.scale / 2);
  const steps = [[0, 0], [regionSize, 0], [0, regionSize], [regionSize, regionSize]];
  const trbArr:Array<any> = trabesAttr.tribesArr;
  let chankLimiter:number = 0;
  for (let i:number = 0; i < 4; i += 1) {
    const tribesChank = trbArr.slice(chankLimiter, chankLimiter + 2);
    const EmptyQuartArr = getMatrixArea(islndArr, steps[i][0], steps[i][1], regionSize);
    const arrRegWithTribes = setTrabesTest(EmptyQuartArr, tribesChank);
    setRegionWithTrabes(islndArr, arrRegWithTribes, steps[i][0], steps[i][1], regionSize);
    chankLimiter += 2;
  }
  return islndArr;
}
