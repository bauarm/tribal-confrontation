export function measureDistance(aPoint:Array<number>, bPoint:Array<number>):number {
  const result:number = Math.sqrt(((aPoint[0] - bPoint[0]) ** 2) + ((aPoint[1] - bPoint[1]) ** 2));
  return result;
}

export function checkDistance():void {

}
