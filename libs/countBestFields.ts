function countBestFields(matrix:Array<any>, coef:number):number {
  let count = 0;
  for (let i:number = 0; i < matrix.length; i += 1) {
    for (let j:number = 0; j < matrix.length; j += 1) {
      if (matrix[i][j][0] === 10) {
        count += 1;
      }
    }
  }
  console.log(`Num of tribal in this world ${Math.floor(count / coef)}`);
  return Math.floor(count / 3);
}