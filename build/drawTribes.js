var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// eslint-disable-next-line import/no-unresolved, import/extensions
import { ctx, grid } from "./global.js";
const rect = (x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
};
function writeText(i, j, text) {
    ctx.font = "9px Ubuntu";
    ctx.fillStyle = "white";
    ctx.fillText(text, i * grid + 2, j * grid + 28);
}
function getTribesColor(trabesName, tribesArr) {
    for (let i = 0; i < tribesArr.length; i += 1) {
        if (tribesArr[i][0] === trabesName) {
            return tribesArr[i][1];
        }
    }
    return "red";
}
function getFlag(name) {
    return new Promise((resolve) => {
        const pathTemplate = `accets/${name}.svg`;
        const elem = new Image();
        elem.src = pathTemplate;
        elem.onload = () => resolve(elem);
    });
}
function drawElem(name, a, b, c, d) {
    return __awaiter(this, void 0, void 0, function* () {
        const elem = yield getFlag(name);
        return ctx.drawImage(elem, a, b, c, d);
    });
}
export default function drawFirstTribes(IslandWithTribes, tribesArr) {
    for (let i = 0; i < IslandWithTribes.length; i += 1) {
        for (let j = 0; j < IslandWithTribes.length; j += 1) {
            if (IslandWithTribes[i][j][1] !== 0) {
                const tribeColor = getTribesColor(IslandWithTribes[i][j][1], tribesArr);
                rect(i * grid, j * grid, grid - 1, grid - 1, tribeColor);
                writeText(i, j, IslandWithTribes[i][j][1]);
                drawElem(IslandWithTribes[i][j][1], i * grid + 5, j * grid, grid - 10, grid - 10);
            }
        }
    }
}
