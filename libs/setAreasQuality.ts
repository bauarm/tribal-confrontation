function setAreasQuality(matrix:Array<any>, score:number, quantity:number):Array<any> {
  const newArray:Array<any> = matrix;
  let qnt:number = quantity;
  while (qnt > 0) {
    for (let i:number = 0; i < matrix.length; i += 1) {
      for (let j:number = 0; j < matrix.length; j += 1) {
        const passStep = minmaxRand(0, 7);
        if (matrix[i][j][0] >= 0 && passStep === 3 && qnt > 0) {
          newArray[i][j][0] = score;
          qnt -= 1;
        }
      }
    }
  }
  return newArray;
}

function findPointForSetlment(QuartRegionArr:Array<any>, score:number, quantity:number):Array<any> {
  const newArray:Array<any> = QuartRegionArr;
  let qnt:number = quantity;
  while (qnt > 0) {
    for (let i:number = 0; i < QuartRegionArr.length; i += 1) {
      for (let j:number = 0; j < QuartRegionArr.length; j += 1) {
        if (qnt === 0) {
          newArray[i][j][0] = score;
          qnt -= 1;
        }
      }
    }
  }
  return newArray;
}

function findPointOnHorLine(QuartRegionArr:Array<any>, pos:Array<any>, point:number):Array<any> {
  const newArray:Array<any> = QuartRegionArr;
  let qnt:boolean = true;
  while (qnt) {
    for (let i:number = pos[0][0]; i < pos[0][1]; i += 1) {
      for (let j:number = pos[1][0]; j < pos[1][1]; j += 1) {
        const passStep = minmaxRand(0, 7);
        if (QuartRegionArr[i][j][0] >= 0 && passStep === 3 && qnt) {
          newArray[i][j][0] = point;
          console.log("45");
          qnt = false;
        }
      }
    }
  }
  return newArray;
}
// const arrFrag2 = setAreasQuality(arrFrag, 100, 3);