function countFields(matrix:Array<any>, placeScore:number):number {
  let count = 0;
  for (let i:number = 0; i < matrix.length; i += 1) {
    for (let j:number = 0; j < matrix.length; j += 1) {
      if (matrix[i][j][0] === placeScore) {
        count += 1;
      }
    }
  }
  return count;
}

function countScoreAllFields(matrix:Array<any>):Array<number> {
  const countArray:Array<number> = [998];
  for (let i:number = 1; i < 11; i += 1) {
    const count:number = countFields(matrix, i);
    countArray.push(count);
  }
  return countArray;
}

export default function staticForFieldScores(matrix:Array<any>) {
  return countScoreAllFields(matrix);
}
