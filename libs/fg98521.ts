function generateTribes(){
  let getTribesSize:number=minmaxRand(400, 600);
  
  
}


function addGarmon(gend:number):Array<number> { 
  let garmon:Array<number>=[];
  let tostesterone,estrogen:number;
  if(gend===1){
    tostesterone=minmaxRand(0, 50);
    estrogen=minmaxRand(25, 100);
    garmon.push(tostesterone,estrogen);
  }
  else{
    tostesterone=minmaxRand(25, 100);
    estrogen=minmaxRand(0, 75);
    garmon.push(tostesterone,estrogen);
  }
return garmon;
}





function getGender():number { 
  return Math.floor(Math.random() * 2 );
  }


function makePers() { 
    let gender:number=getGender();
    let garmon:Array<number>=addGarmon(gender);
    let tostesterone:number=garmon[0],
        estrogen:number=garmon[1];
    let height:number=minmaxRand(150, 200);
    let mass:number=minmaxRand(60, 120);
    let power:number=getPower(tostesterone,estrogen);
    //let agility=getAgility(height,mass);
    return {
      gender:gender,
      height:height,
      mass:mass,
      power:power,
      //agility:agility,
      tostesterone:tostesterone,
    }
}

function getPower(tostesterone:number,estrogen:number):number{ 
  let tpower:number=0;
  if(tostesterone<25){
    tpower=minmaxRand(100, 500);
  }
  else if (tostesterone<50) {
    tpower=minmaxRand(500, 1000);
  }
  else if (tostesterone<75) {
    tpower=minmaxRand(1000, 1500);
  }
  else if (tostesterone<=100) {
    tpower=minmaxRand(1500, 2000);
  }
  return tpower;
}
