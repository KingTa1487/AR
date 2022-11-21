class Catcher{
	constructor(){
		this.catcher = makecatcher('cyan');
		this.stoper = makecatcher('fuchsia');
		///this.light.position.set(-1, 1, 0);
	}
}
function makecatcher(color){
	var catcher = new THREE.Group();

	var torus = new THREE.Mesh(new THREE.TorusGeometry(1, 0.12, 4, 100), new THREE.MeshLambertMaterial({transparent : true, opacity : 1}));
	torus.material.emissive = new THREE.Color(color);
	
	var plate = new THREE.Mesh(new THREE.CircleGeometry(0.9, 32), 
				new THREE.MeshLambertMaterial({color : 0x000000, transparent : true, opacity : 1}));
	plate.position.z = -0.05;
	
	light = new THREE.PointLight();
	light.position.y = 0.02;
	
	catcher.rotation.x = -Math.PI/2;
	catcher.add(torus, plate, light);
	catcher.position.y = 0;
	return catcher;
}	