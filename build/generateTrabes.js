var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
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
function downloadEmblem(name) {
    return new Promise((resolve) => {
        const pathTemplate = `accets/${name}.svg`;
        const elem = new Image();
        elem.src = pathTemplate;
        elem.onload = () => resolve(elem);
    });
}
function getEmblem(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const elem = yield downloadEmblem(name);
        return elem;
    });
}
export default function generateTrabes(matrix, numOftribes) {
    const tribals = [];
    const tribesColor = getTribeAttributtes(allTribesColor, numOftribes);
    const tribesTotemNames = getTribeAttributtes(allTotemNames, numOftribes);
    for (let i = 0; i < numOftribes; i += 1) {
        tribals.push([]);
        tribals[i].push(tribesTotemNames[i]);
        tribals[i].push(formRgbaString(tribesColor[i]));
        tribals[i].push(getEmblem(tribesTotemNames[i]));
        tribals[i].push([0, 0]);
    }
    return tribals;
}
