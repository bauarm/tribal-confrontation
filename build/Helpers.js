export function getId(id) {
    return document.getElementById(id);
}
export function minmaxRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
