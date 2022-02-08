let nextGameStep = (function () {
    return requestAnimationFrame;
})();
export function game() {
    nextGameStep(game);
    makeTime();
}
;
let tick = 0;
function makeTime() {
    tick += 1;
    console.log(tick);
}
