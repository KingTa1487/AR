class Options{
	constructor(){
		this.start = false, this.play = false;
		this.score = 0;
		this.count = 0;
		this.interval = 0;
		
		//音樂
		this.audio = document.createElement("audio");
		this.audio.src = "Jay Jay.mp3";
		this.sound = document.createElement("audio");
		this.sound.src = "b3.wav";
		
		let loader = new THREE.TextureLoader();
		loader.crossOrigin = '';
		//開始
		let begin = loader.load('start.png');
		let beginmap = new THREE.MeshBasicMaterial({
			map:begin,
			side:THREE.DoubleSide,
			transparent:true
		});
		this.startPoint = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), beginmap);
		this.startPoint.rotation.x = -Math.PI/2;
		this.startPoint.position.set(2.5, 0, 0);
		
		//結束
		let end = loader.load('end.png');
		let endmap = new THREE.MeshBasicMaterial({
			map:end,
			side:THREE.DoubleSide,
			transparent:true
		});
		this.endPoint = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), endmap);
		this.endPoint.rotation.x = -Math.PI/2;
		this.endPoint.position.set(2.5, 0, 0);
		
		//暫停
		let pause = loader.load('pause.png');
		let pausemap = new THREE.MeshBasicMaterial({
			map:pause,
			side:THREE.DoubleSide,
			transparent:true
		});
		this.pausePoint = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), pausemap);
		this.pausePoint.rotation.x = -Math.PI/2;
		this.pausePoint.position.set(-2.5, 0, 0);
		
		//繼續
		let con = loader.load('continue.png');
		let conmap = new THREE.MeshBasicMaterial({
			map:con,
			side:THREE.DoubleSide,
			transparent:true
		});
		this.conPoint = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), conmap);
		this.conPoint.rotation.x = -Math.PI/2;
		this.conPoint.position.set(-2.5, 0, 0);
	}
	
	
	
}

function getScore(options){
	options.score++;
	
	return options.score;
}

function playAudio() {
　	//const audio = document.createElement("audio");
　	//audio.src = "Jay Jay.mp3";
　	audio.play();
}

function effect(sound){
	//const sound = document.createElement("audio");
　	//sound.src = "b3.wav";
　	sound.play();
}

function popbubble(){
	while(B && BX){
		B.pop();
		BX.pop();
	}
}