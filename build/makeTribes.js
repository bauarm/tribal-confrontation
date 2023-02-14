import { minmaxRand, getColor } from "./Helpers.js";

function getPowerTribe(info) {
    let sumPower = 0;
    for (let i = 0; i < info.length; i += 1) {
        sumPower += info[i].power;
    }
    return sumPower;
}
function addGarmon(gend) {
    const garmon = [];
    let tostesterone;
    let estrogen;
    if (gend === 1) {
        tostesterone = minmaxRand(0, 50);
        estrogen = minmaxRand(25, 100);
        garmon.push(tostesterone, estrogen);
    }
    else {
        tostesterone = minmaxRand(25, 100);
        estrogen = minmaxRand(0, 75);
        garmon.push(tostesterone, estrogen);
    }
    return garmon;
}
function getGender() {
    return Math.floor(Math.random() * 2);
}
function getPower(tostesterone) {
    let tpower = 0;
    if (tostesterone < 25) {
        tpower = minmaxRand(100, 500);
    }
    else if (tostesterone < 50) {
        tpower = minmaxRand(500, 1000);
    }
    else if (tostesterone < 75) {
        tpower = minmaxRand(1000, 1500);
    }
    else if (tostesterone <= 100) {
        tpower = minmaxRand(1500, 2000);
    }
    return tpower;
}
function makePers() {
    const gender = getGender();
    const garmon = addGarmon(gender);
    const tostesterone = garmon[0];
    const height = minmaxRand(150, 200);
    const mass = minmaxRand(60, 120);
    const power = getPower(tostesterone);
    // let agility=getAgility(height,mass);
    return {
        gender,
        height,
        mass,
        power,
        // agility:agility,
        tostesterone,
    };
}
export function generateTribes() {
    const getTribesSize = minmaxRand(400, 600);
    const tribalPersons = [];
    const tribal = [];
    for (let i = 0; i < getTribesSize; i += 1) {
        const pers = makePers();
        tribalPersons.push(pers);
    }
    tribal.push(minmaxRand(100, 999));
    tribal.push(getColor());
    tribal.push([0, 0]);
    tribal.push(tribalPersons);
    return tribal;
}
export function getStatTribe() {
    const info = generateTribes();
    let female = 0;
    let males = 0;
    for (let i = 0; i < info.length; i += 1) {
        if (info[i].gender)
            female += 1;
        else
            males += 1;
    }
    console.log(`Males ${males}`, `Females ${female}`);
    console.log(`Power tribes ${getPowerTribe(info)}`);
}
