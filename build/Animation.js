let isPaused = false;
// eslint-disable-next-line func-names
const nextGameStep = (function () {
    return requestAnimationFrame;
}());
export const timer = {
    tick: 0,
    curTick: 0,
};
function makeTime() {
    timer.tick += 1;
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
