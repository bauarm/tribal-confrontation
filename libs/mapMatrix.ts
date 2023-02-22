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