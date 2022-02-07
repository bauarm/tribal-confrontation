import { minmaxRand } from "./Helpers.js";
function generateTribes() {
    let getTribesSize = minmaxRand(400, 600);
}
function addGarmon(gend) {
    let garmon = [];
    let tostesterone, estrogen;
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
function makePers() {
    let gender = getGender();
    let garmon = addGarmon(gender);
    let tostesterone = garmon[0], estrogen = garmon[1];
    let height = minmaxRand(150, 200);
    let mass = minmaxRand(60, 120);
    let power = getPower(tostesterone, estrogen);
    //let agility=getAgility(height,mass);
    return {
        gender: gender,
        height: height,
        mass: mass,
        power: power,
        //agility:agility,
        tostesterone: tostesterone,
    };
}
function getPower(tostesterone, estrogen) {
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
