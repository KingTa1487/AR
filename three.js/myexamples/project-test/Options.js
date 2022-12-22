class Options{
	constructor(){
		this.start = false, this.play = false, this.mbubble = false;
		this.score = 0;
		this.count = 0;
		this.interval = 0;// 泡泡週期
		
		//遊戲音樂
		this.music = document.createElement("audio");
　		this.music.preload;
		this.music.src = "We Wish You a Merry Christmas.mp3";	//We Wish You a Merry Christmas.mp3   練習
													//arcade-music-loop.wav  	正式
		//選項音效
		this.choice = document.createElement("audio");
　		this.choice.preload;
		this.choice.src = "b3.wav";
		
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
		this.startPoint.position.set(0, 0, 3.5);
		
		//結束
		let end = loader.load('end.png');
		let endmap = new THREE.MeshBasicMaterial({
			map:end,
			side:THREE.DoubleSide,
			transparent:true
		});
		this.endPoint = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), endmap);
		this.endPoint.rotation.x = -Math.PI/2;
		this.endPoint.position.set(-2, 0.5, 3);
		
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
		this.restartPoint.position.set(2, 0.5, 3);
		
		//確認
		let confirm_ = loader.load('confirm.png');
		let confirm_map = new THREE.MeshBasicMaterial({
			map:confirm_,
			side:THREE.DoubleSide,
			transparent:true
		});
		this.confirm_Point = new THREE.Mesh(new THREE.PlaneGeometry(3.5, 3.5), confirm_map);
		this.confirm_Point.rotation.x = -Math.PI/2;
		this.confirm_Point.position.set(2, 0.5, 3);
	
		////////
		//位階
		let rank = loader.load('rank.jpg');
		rank.wrapS = THREE.RepeatWrapping;
		rank.wrapT = THREE.RepeatWrapping;
		rank.repeat.set (.25, 1);	
		rank.offset.set (0, 1);
		let rankmap = new THREE.MeshBasicMaterial({
			map:rank,
			side:THREE.DoubleSide,
			transparent:true
		});
		this.rankPoint = new THREE.Mesh(new THREE.CircleGeometry(1.3, 32), rankmap);
		this.rankPoint.rotation.x = -Math.PI/2;
		this.rankPoint.position.set(-4, 0.4, 1);
		
		
	}
	
	effect(){		//點擊音效
　		this.choice.play();
	}
}

function gamemusic(music) {//遊戲音樂
　	music.play();
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