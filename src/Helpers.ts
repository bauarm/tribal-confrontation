export function getId(id: string):any {
  return document.getElementById(id);
}

export function minmaxRand(min:number, max:number):number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getColor():string {
  const r:number = minmaxRand(0, 255);
  const g:number = minmaxRand(0, 255);
  const b:number = minmaxRand(0, 255);
  const color:string = `rgba(${r}, ${g} ,${b}, 255)`;
  return color;
}
