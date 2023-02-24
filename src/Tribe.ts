export default class Tribe {
  name:string;

  color:string;

  flag:HTMLImageElement;

  constructor(name:string, color:string, flag:HTMLImageElement) {
    this.name = name;
    this.color = color;
    this.flag = flag;
  }
}
