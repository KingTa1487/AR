/////////
class Scores {
	constructor(pos){
		this.number = 0;
		
		let loader = new THREE.TextureLoader();
		loader.crossOrigin = '';
		let texture = loader.load('scoreNumber2.png');

		texture.wrapS = THREE.RepeatWrapping;
		texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set (.1,1);	
		texture.offset.set (0,1/10);
		let scoMap = new THREE.MeshBasicMaterial({
			map:texture,
			side:THREE.DoubleSide,
			transparent:true
		});
		
		this.scorePoint = new THREE.Mesh(new THREE.PlaneGeometry( .9, 1 ), scoMap);
		this.scorePoint.rotation.x = -Math.PI/2;
		this.scorePoint.position.set(-1.5-(pos * .9), .1, 0);
	}
	
	carrys (num) {		
		this.number = num;
		
		if (this.scorePoint) {
			var texture = this.scorePoint.material.map;
			texture.offset.x = this.number * .1;
		}		
	}
}

function clear (scoreGroup){
	for (var i=0; i<scoreGroup.length; i++){
		scoreGroup[i].number = 0;
		var texture = scoreGroup[i].scorePoint.material.map;
		texture.offset.x = 0;
	}
}

function rankSet (score) {		
		
		var num = 3;
		if (score > 1350 && score <= 2565) num = 2;
		if (score > 2700 && score <= 3915) num = 1;
		if (score > 4050) num = 0;
		
		if (options.rankPoint) {
			var texture = options.rankPoint.material.map;
			texture.offset.x = num * .25;
		}		
}	
