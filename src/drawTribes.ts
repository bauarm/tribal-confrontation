export default function drawFirstTribes(IslandWithTribes:Array<any>, tribesArr:Array<any>):void {
  for (let i:number = 0; i < IslandWithTribes.length; i += 1) {
    for (let j:number = 0; j < IslandWithTribes.length; j += 1) {
      if (IslandWithTribes[i][j][1] !== 0) {
        console.log(IslandWithTribes[i][j][1]);
        console.log(tribesArr);
        const color = tribesArr.filter((tribeName) => tribeName[0] === IslandWithTribes[i][j][0]);
        console.log(color);
      }
    }
  }
}
