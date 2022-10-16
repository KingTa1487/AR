class Options{
	constructor(){
		this.begin = false;
		this.score = 0;
		
		
	}
	
	
}

function getScore(options){
	options.score++;
	
	return options.score;
}