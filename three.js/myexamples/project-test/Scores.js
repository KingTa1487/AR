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
		
		this.scorePoint = new THREE.Mesh(new THREE.PlaneGeometry( .3, 1 ), scoMap);
		this.scorePoint.rotation.x = -Math.PI/2;
		this.scorePoint.position.set(-1.5-(pos * .3), .1, 0);
	}
	
	carrys (num) {		
		this.number = num;
		
		if (this.scorePoint) {
			var texture = this.scorePoint.material.map;
			texture.offset.x = this.number * .1;
		}		
	}
}