import { minmaxRand } from "./Helpers.js";
const allTribesColor = [[255, 0, 0], [139, 0, 0], [199, 21, 133], [255, 69, 0], [139, 69, 19],
    [102, 51, 153], [255, 0, 255], [25, 25, 112], [47, 79, 79], [0, 100, 0]];
const allTotemNames = ["bears", "beavers", "boars", "deers", "fishes", "foxes", "horses", "hares", "ravens", "swifts", "wolfes"]; // "fogs", "shakes"
function getTribeAttributtes(atributes, numOftribes) {
    const trabesAttr = [];
    while (trabesAttr.length < numOftribes) {
        const randAttr = atributes[minmaxRand(0, atributes.length - 1)];
        if (trabesAttr.indexOf(randAttr) === -1) {
            trabesAttr.push(randAttr);
        }
    }
    return trabesAttr;
}
function formRgbaString(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    const b = rgb[2];
    const color = `rgba(${r}, ${g} ,${b}, 255)`;
    return color;
}
export default function generateTrabes(matrix, numOftribes) {
    const tribals = [];
    const tribesColor = getTribeAttributtes(allTribesColor, numOftribes);
    const tribesTotemNames = getTribeAttributtes(allTotemNames, numOftribes);
    for (let i = 0; i < numOftribes; i += 1) {
        tribals.push([]);
        tribals[i].push(tribesTotemNames[i]);
        tribals[i].push(formRgbaString(tribesColor[i]));
        tribals[i].push([0, 0]);
    }
    return tribals;
}
