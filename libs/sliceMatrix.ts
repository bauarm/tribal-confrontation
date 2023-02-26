function SliceForMatrix(QuartRegionArr:Array<any>, pos:Array<any>):Array<any> {
  const newArray:Array<any> = [];
  for (let i:number = pos[0][0]; i < pos[0][1]; i += 1) {
    newArray.push([]);
    for (let j:number = pos[1][0]; j < pos[1][1]; j += 1) {
      newArray[i].push(QuartRegionArr[i][j]);
    }
  }
  return newArray;
}