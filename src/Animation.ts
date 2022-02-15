let isPaused:boolean = false;

// eslint-disable-next-line func-names
const nextGameStep = (function () {
  return requestAnimationFrame;
}());

let tick:number = 0;

function makeTime() {
  tick += 1;
  console.log(tick);
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
