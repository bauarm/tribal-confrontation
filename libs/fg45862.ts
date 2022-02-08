function getId(id: string):any {
  return document.getElementById(id);
}

function minmaxRand(min:number, max:number):number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

