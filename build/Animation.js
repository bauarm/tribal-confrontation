let isPaused = false;
// eslint-disable-next-line func-names
const nextGameStep = (function () {
    return requestAnimationFrame;
}());
export const timer = {
    tick: 0,
    curTick: 0,
    day: 1,
    mount: 3,
    year: 1040,
};
const cday = document.querySelector("#tday");
const cmount = document.querySelector("#tmount");
function makeTime() {
    timer.tick += 1;
    if (timer.tick > 30) {
        timer.day += 1;
        timer.tick = 0;
        cday.innerHTML = timer.day.toString();
    }
    if (timer.day > 30) {
        timer.mount += 1;
        timer.day = 1;
        cmount.innerHTML = timer.mount.toString();
    }
    if (timer.mount > 12) {
        timer.year += 1;
        timer.mount = 1;
    }
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
