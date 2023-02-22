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