let isPaused:boolean = false;

// eslint-disable-next-line func-names
const nextGameStep = (function () {
  return requestAnimationFrame;
}());

interface ITimer {
  tick:number;
  curTick:number;
}

export const timer:ITimer = {
  tick: 0,
  curTick: 0,
};

function makeTime() {
  timer.tick += 1;
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
