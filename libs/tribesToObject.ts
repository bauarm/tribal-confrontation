function tribesArrToObj(tribArr:Array<any>):void {
  const tribes = {};
  for (let i:number = 0; i < tribArr.length; i += 1) {
    console.log(tribArr[i]);
    for (let j:number = 0; j < tribArr[i].length; j += 1) {
      console.log(tribArr[i][j]);
    }
  }
}

// tribesArrToObj(allTribes);