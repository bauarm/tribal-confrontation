
let nextGameStep=(function(){
	return requestAnimationFrame
})();

export function game():void{
  nextGameStep(game);
  makeTime()	
};
	


let tick:number=0
function makeTime() {
  tick+=1;
  console.log(tick)
   
  }