/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { minmaxRand, getColor } from "./Helpers.js";

interface PersForTribe {
  gender: number;
  height: number;
  mass: number;
  power: number;
  tostesterone: number;
}

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

function makePers():PersForTribe {
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

export function generateTribes():Array<any> {
  const getTribesSize:number = minmaxRand(400, 600);
  const tribalPersons = [];
  const tribal = [];
  for (let i:number = 0; i < getTribesSize; i += 1) {
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
  let female:number = 0; let males:number = 0;
  for (let i:number = 0; i < info.length; i += 1) {
    if (info[i].gender) female += 1;
    else males += 1;
  }

  console.log(`Males ${males}`, `Females ${female}`);
  console.log(`Power tribes ${getPowerTribe(info)}`);
}
