class Progress_bar{
	constructor(){
		
		this.loader = new THREE.TextureLoader();
		this.barMap = this.loader.load ('pbar.jpg');
		this.p = new THREE.RingGeometry((0.1, 0.2, 30, 3, -Math.PI/2, 3));
		this.pbar = new THREE.Mesh(this.p, new THREE.MeshBasicMaterial({side : THREE.DoubleSide, map : this.barMap}));
		
		this.pbar.rotation.z = Math.PI;
	}

}