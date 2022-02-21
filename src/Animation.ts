let isPaused:boolean = false;

// eslint-disable-next-line func-names
const nextGameStep = (function () {
  return requestAnimationFrame;
}());

interface ITimer {
  tick:number;
  curTick:number;
  day:number;
  mount:number;
  year:number;
  mountName:Array<string>;
}

export const timer:ITimer = {
  tick: 0,
  curTick: 0,
  day: 1,
  mount: 3,
  year: 1040,
  mountName: ["", "зима", "позд. зима", "ран. весна", "весна", "позд. весна", "ран. лето", "лето", "позд. лето", "ран. осень", "осень", "позд. осень", "ран. зима"],
};

function makeTime() {
  const cday = document.querySelector("#tday") as HTMLInputElement;
  const cmount = document.querySelector("#tmount") as HTMLInputElement;
  const cyear = document.querySelector("#tyear") as HTMLInputElement;
  cday.innerHTML = timer.day.toString();
  cmount.innerHTML = timer.mountName[timer.mount];
  cyear.innerHTML = timer.year.toString();
  timer.tick += 1;
  if (timer.tick > 10) {
    timer.day += 1;
    timer.tick = 0;
    cday.innerHTML = timer.day.toString();
  }
  if (timer.day > 30) {
    timer.mount += 1;
    timer.day = 1;
    cmount.innerHTML = timer.mountName[timer.mount];
  }
  if (timer.mount > 12) {
    timer.year += 1;
    timer.mount = 1;
    cyear.innerHTML = timer.year.toString();
  }
}

export function game():void {
  nextGameStep(game);
  if (isPaused) {
    makeTime();
  }
}

export function setPaused():void {
  isPaused = !isPaused;
}
