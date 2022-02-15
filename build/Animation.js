let isPaused = false;
// eslint-disable-next-line func-names
const nextGameStep = (function () {
    return requestAnimationFrame;
}());
let tick = 0;
function makeTime() {
    tick += 1;
    console.log(tick);
}
export function game() {
    nextGameStep(game);
    if (isPaused) {
        makeTime();
    }
}
export function setPaused() {
    isPaused = !isPaused;
}
