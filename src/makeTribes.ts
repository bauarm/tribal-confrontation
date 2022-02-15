/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { minmaxRand } from "./Helpers.js";

function getPowerTribe(info:any):number {
  let sumPower:number = 0;
  for (let i:number = 0; i < info.length; i += 1) {
    sumPower += info[i].power;
  }
  return sumPower;
}

function addGarmon(gend:number):Array<number> {
  const garmon:Array<number> = [];
  let tostesterone; let estrogen:number;
  if (gend === 1) {
    tostesterone = minmaxRand(0, 50);
    estrogen = minmaxRand(25, 100);
    garmon.push(tostesterone, estrogen);
  } else {
    tostesterone = minmaxRand(25, 100);
    estrogen = minmaxRand(0, 75);
    garmon.push(tostesterone, estrogen);
  }
  return garmon;
}

function getGender():number {
  return Math.floor(Math.random() * 2);
}

function getPower(tostesterone:number):number {
  let tpower:number = 0;
  if (tostesterone < 25) {
    tpower = minmaxRand(100, 500);
  } else if (tostesterone < 50) {
    tpower = minmaxRand(500, 1000);
  } else if (tostesterone < 75) {
    tpower = minmaxRand(1000, 1500);
  } else if (tostesterone <= 100) {
    tpower = minmaxRand(1500, 2000);
  }
  return tpower;
}

function makePers() {
  const gender:number = getGender();
  const garmon:Array<number> = addGarmon(gender);
  const tostesterone:number = garmon[0];
  const height:number = minmaxRand(150, 200);
  const mass:number = minmaxRand(60, 120);
  const power:number = getPower(tostesterone);
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
  const getTribesSize:number = minmaxRand(400, 600);
  const tribal = [];
  for (let i:number = 0; i < getTribesSize; i += 1) {
    const pers = makePers();
    tribal.push(pers);
  }
  return tribal;
}

export function getStatTribe() {
  const info = generateTribes();
  let female:number = 0; let males:number = 0;
  for (let i:number = 0; i < info.length; i += 1) {
    if (info[i].gender) female += 1;
    else males += 1;
  }

  console.log(`Males ${males}`, `Females ${female}`);
  console.log(`Power tribes ${getPowerTribe(info)}`);
}
