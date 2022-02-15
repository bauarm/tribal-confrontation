export function getId(id) {
    return document.getElementById(id);
}
export function minmaxRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getColor() {
    const r = minmaxRand(0, 255);
    const g = minmaxRand(0, 255);
    const b = minmaxRand(0, 255);
    const color = `rgba(${r}, ${g} ,${b}, 255)`;
    return color;
}
