function setAreasQuality(matrix:Array<any>, score:number, quantity:number):Array<any> {
  const newArray:Array<any> = matrix;
  let qnt:number = quantity;
  while (qnt > 0) {
    if (qnt === quantity) {
      for (let i:number = 0; i < matrix.length; i += 1) {
        for (let j:number = 0; j < 2; j += 1) {
          const passStep = minmaxRand(0, 3);
          if (matrix[i][j][0] >= 0 && passStep === 3 && qnt > 0) {
            newArray[i][j][0] = score;
            qnt -= 1;
          }
        }
      }
    }
    if (qnt === quantity - 1) {
      for (let i:number = 0; i < 4; i += 1) {
        for (let j:number = 3; j < 5; j += 1) {
          const passStep = minmaxRand(0, 3);
          if (matrix[i][j][0] >= 0 && passStep === 3 && qnt > 0) {
            newArray[i][j][0] = score;
            qnt -= 1;
          }
        }
      }
    } else break;
  }
  return newArray;
}