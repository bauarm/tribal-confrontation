export default function setTribes(islandArr:Array<any>, allTribesArr:Array<any>):void {
  const arr:Array<any> = islandArr;
  const allTribes:Array<any> = allTribesArr;
  let count:number = 0;
  let passStep:number = 0;
  for (let i:number = 0; i < arr.length; i += 1) {
    for (let j:number = 0; j < arr.length; j += 1) {
      passStep = minmaxRand(0, 1);
      if (arr[i][j][0] > 9 && arr[i][j][1] === 0 && count < allTribes.length && passStep === 0) {
        const tribeName = allTribes[count][0];
        arr[i][j][1] = tribeName;
        allTribes[count][2][0] = i;
        allTribes[count][2][1] = j;
        count += 1;
      }
    }
  }
}