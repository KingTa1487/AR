class Progress_bar{
	constructor(){
		
		this.loader = new THREE.TextureLoader();
		this.barMap = this.loader.load ('pbar.jpg');
		this.p = new THREE.RingGeometry(0.01, 1.5, 30, 3, -Math.PI/2, 0);///
		this.pbar = new THREE.Mesh(this.p, new THREE.MeshBasicMaterial({side : THREE.DoubleSide, map : this.barMap}));
		
		this.pbar.rotation.x = Math.PI/2;
	}

}