/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { minmaxRand } from "./Helpers.js";
export default function setTribes(islandArr, allTribesArr) {
    const arr = islandArr;
    const allTribes = allTribesArr;
    let count = 0;
    let passStep = 0;
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length; j += 1) {
            passStep = minmaxRand(0, 1);
            if (arr[i][j][0] > 9 && arr[i][j][1] === 0 && count < allTribes.length && passStep === 0) {
                const tribeList = allTribes[count][1];
                arr[i][j][1] = tribeList;
                allTribes[count][2][0] = i;
                allTribes[count][2][1] = j;
                count += 1;
            }
        }
    }
}
