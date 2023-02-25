function getImg(name:string):Array<any> {
  const img = new Image();
  const arrImg:Array<any> = [];
  img.src = `accets/${name}.svg`;
  arrImg.push(name);
  arrImg.push(img);
  return arrImg;
}

function getFlagsForAll(nameArr:Array<any>):Array<any> {
  const imgArr:Array<any> = [];
  let imgName:Array<any>;
  for (let i:number = 0; i < nameArr.length; i += 1) {
    imgName = getImg(nameArr[i]);
    imgArr.push(imgName);
  }
  return imgArr;
}

function setFlagsForName(nameArr:Array<string>, flagsImg:Array<any>):Array<any> {
  const newArray:Array<any> = [];
  for (let i:number = 0; i < nameArr.length; i += 1) {
    for (let j:number = 0; j < flagsImg.length; j += 1) {
      if (nameArr[i] === flagsImg[j][0]) {
        newArray.push(flagsImg[j][1]);
      }
    }
  }
  return newArray;
}

// const allFlags = getFlagsForAll(allTotemNames);
// const changeFlags = (setFlagsForName(tribesTotemNames, allFlags));