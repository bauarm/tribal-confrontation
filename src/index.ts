import {getId,minmaxRand} from "./Helpers.js";
import {game,setPaused} from "./Animation.js";
import {getStatTribe,generateTribes} from "./makeTribes.js";

game();
document.querySelector('#pauseBtn')?.addEventListener('click',()=>setPaused());
//console.log(generateTribes())
getStatTribe();
getStatTribe();
getStatTribe();
const canvas = getId('canvas');

function getSum(a:number,b:number):number{
  return a+b;
}

let grid:number =32;
let sizeField:number=17;

let sizeSceneX:number=grid*sizeField; 
let sizeSceneY:number=grid*sizeField;

canvas.width =sizeSceneX;
canvas.height =sizeSceneY;
const ctx = canvas.getContext('2d');

function fillMatrix(scale:number=17):Array<any>{
  let arr:Array<any>=[]
  for(let i:number=0;i<scale;i++){
    arr[i]=(new Array(scale)).fill(0)
    for(let j:number=0;j<scale;j++){
      if(j>0 && i>0 && j<scale-1 && i<scale-1){
        arr[i][j]=[minmaxRand(1, 10),0];
      }
      else{arr[i][j]=[0,0];}
    }
  }
  return arr;
}
let arr=fillMatrix(sizeField);

function drawField(matrix:Array<any>):void{
  for(let i:number=0;i<matrix.length;i++){
		for(let j:number=0;j<matrix.length;j++){
			ctx.strokeRect(i*grid, j*grid, grid, grid);
      ctx.font = "12px Ubuntu";
      arr[i][j][0]==10?ctx.fillStyle = "blue":ctx.fillStyle = "red"
      ctx.fillText(arr[i][j][0], i*grid+10, j*grid+18);
		}
	}
}

drawField(arr)
console.log(arr);


function countBestFields(matrix:Array<any>):number{
  let count=0
  for(let i:number=0;i<matrix.length;i++){
    for(let j:number=0;j<matrix.length;j++){
      if(arr[i][j][0]==10){
        count=count+1;
      }
    }
  }
  console.log('Num of best fields '+count);
  console.log('Num of tribal in this world '+Math.floor(count/5));
  return Math.floor(count/5);
}

countBestFields(arr);


