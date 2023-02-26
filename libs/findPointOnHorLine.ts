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