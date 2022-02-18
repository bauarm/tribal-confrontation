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
}

export const timer:ITimer = {
  tick: 0,
  curTick: 0,
  day: 1,
  mount: 3,
  year: 1040,
};

function makeTime() {
  console.log(`Day ${timer.day} mount ${timer.mount} year ${timer.year}`);
  timer.tick += 1;
  if (timer.tick > 30) {
    timer.day += 1;
    timer.tick = 0;
  }
  if (timer.day > 30) {
    timer.mount += 1;
    timer.day = 1;
  }
  if (timer.mount > 12) {
    timer.year += 1;
    timer.mount = 1;
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
