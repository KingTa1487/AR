class Options{
	constructor(){
		this.start = false, this.play = false;
		this.score = 0;
		this.count = 0;
		this.interval = 0;// 泡泡週期
		
		//遊戲音樂
		this.music = document.createElement("audio");
　		this.music.preload;
		this.music.src = "Never_Let_You_Go.mp3";
		
		let loader = new THREE.TextureLoader();
		loader.crossOrigin = '';
		//開始
		let begin = loader.load('start.png');
		let beginmap = new THREE.MeshBasicMaterial({
			map:begin,
			side:THREE.DoubleSide,
			transparent:true
		});
		this.startPoint = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), beginmap);
		this.startPoint.rotation.x = -Math.PI/2;
		this.startPoint.position.set(0, 0, 8);
		
		//結束
		let end = loader.load('end.png');
		let endmap = new THREE.MeshBasicMaterial({
			map:end,
			side:THREE.DoubleSide,
			transparent:true
		});
		this.endPoint = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), endmap);
		this.endPoint.rotation.x = -Math.PI/2;
		this.endPoint.position.set(-2, 0.5, 8);
		
		//暫停
		let pause = loader.load('pause.png');
		let pausemap = new THREE.MeshBasicMaterial({
			map:pause,
			side:THREE.DoubleSide,
			transparent:true
		});
		this.pausePoint = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), pausemap);
		this.pausePoint.rotation.x = -Math.PI/2;
		this.pausePoint.position.set(2.5, 0, 0);
		
		//繼續
		let con = loader.load('continue.png');
		let conmap = new THREE.MeshBasicMaterial({
			map:con,
			side:THREE.DoubleSide,
			transparent:true
		});
		this.conPoint = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), conmap);
		this.conPoint.rotation.x = -Math.PI/2;
		this.conPoint.position.set(2.5, 0, 0);
	
		//重來
		let restart = loader.load('Restart.png');
		let restartmap = new THREE.MeshBasicMaterial({
			map:restart,
			side:THREE.DoubleSide,
			transparent:true
		});
		this.restartPoint = new THREE.Mesh(new THREE.PlaneGeometry(3.5, 3.5), restartmap);
		this.restartPoint.rotation.x = -Math.PI/2;
		this.restartPoint.position.set(2, 0.5, 8);
	
	}

	
}

function getScore(options){
	options.score++;
	
	return options.score;
}

function gamemusic(music) {
　	music.play();
}

function effect(){		//點擊音效
	const sound = document.createElement("audio");
　	sound.preload;
	sound.src = "b3.wav";
　	sound.play();
}
function hit(){			//成功觸及音效
	const sound = document.createElement("audio");
　	sound.preload;
	sound.src = "tambourine-hit-2.mp3";
　	sound.play();
}

function popbubble(B, BX, times){	//刪除所有製造的泡泡，遊戲結束或重來
	
	for(i = times; i >= 0; i-- )
		if(B[i].bubble.parent === markerRootHiro)
			markerRootHiro.remove(B[i].bubble, BX[i].Box);
	
	while(B != 0 && BX != 0){
		
		B.pop();
		BX.pop();
		i--;
	}
}