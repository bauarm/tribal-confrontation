let isPaused:boolean = false;

let nextGameStep=(function(){
	return requestAnimationFrame
})();

export function game():void{
  nextGameStep(game);
  if (isPaused) {
    makeTime();
  }
}
	
export function setPaused():void {
  isPaused = !isPaused; 
}

let tick:number=0
function makeTime() {
  tick+=1;
  console.log(tick)
   
  }