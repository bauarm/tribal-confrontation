let isPaused = false;
let nextGameStep = (function () {
    return requestAnimationFrame;
})();
export function game() {
    nextGameStep(game);
    if (isPaused) {
        makeTime();
    }
}
export function setPaused() {
    isPaused = !isPaused;
}
let tick = 0;
function makeTime() {
    tick += 1;
    console.log(tick);
}
