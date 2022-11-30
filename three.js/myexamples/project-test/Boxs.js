class Boxs{
	constructor(bubble, wc){
		this.b1 = box(wc);	this.b2 = box(wc);	this.b3 = box(wc);
		this.b4 = box(wc);	this.b5 = box(wc);	this.b6 = box(wc);
		this.b7 = box(wc);	this.b8 = box(wc);	this.b9 = box(wc);
		
		this.b10 = box(wc);	this.b11 = box(wc);	this.b12 = box(wc);
		this.b13 = box(wc);	this.b14 = box(wc);	this.b15 = box(wc);
		this.b16 = box(wc);	this.b17 = box(wc);	this.b18 = box(wc);
		
		this.b19 = box(wc);	this.b20 = box(wc);	this.b21 = box(wc);
		this.b22 = box(wc);	this.b23 = box(wc);	this.b24 = box(wc);
		this.b25 = box(wc);	this.b26 = box(wc);	this.b27 = box(wc);
		
		this.Box = new THREE.Group();
		
		this.Box.add(this.b1, this.b2, this.b3, this.b4, this.b5, this.b6, this.b7, this.b8, this.b9,
				  this.b10, this.b11, this.b12, this.b13, this.b14, this.b15, this.b16, this.b17, this.b18,
				  this.b19, this.b20, this.b21, this.b22, this.b23, this.b24, this.b25, this.b26, this.b27);
		
		markerRootHiro.add(this.Box);
		
		//小方塊位置	
		let count = 0;
		for(let i = 0; i < 3; i++)
			for(let j = 0; j < 3; j++)
				for(let k = 0; k < 3; k++){
					 this.Box.children[count].position.set(-0.3 + k*0.3, -0.3 + j*0.3, -0.3 + i*0.3);
					 count++;
				}
				
		//方塊群位置
		//console.log(bubble)
		this.Box.position.copy(bubble.position);
	}
}

function box(wc){
	let box = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshPhongMaterial({transparent : true, opacity : 0.7}));
	//box.material.emissive = new THREE.Color(0xFFF000);
	box.material.emissive.setHSL(wc, 1, 0.5);
	return box;
}

function explode(angle, scale, box){
	let count = 0, s = 0;
	
	for(let i = 0; i < 3; i++)
		for(let j = 0; j < 3; j++)
			for(let k = 0; k < 3; k++){
				
				//rotation
				box.rotation.x = angle/5;
				box.rotation.y = angle/5;
				box.children[count].rotation.z = 2;
				box.children[count].rotation.y = angle;
				
				//scale
				box.children[count].scale.set(scale, scale, scale);
				
				//opacity
				box.children[count].material.opacity -= 0.03;

				//z
				if(i == 0)
					box.children[count].position.z -= 0.03;
				if(i == 2)
					box.children[count].position.z += 0.03;
				
				//x
				if(k == 0)
					box.children[count].position.x -= 0.03;
				if(k == 2)
					box.children[count].position.x += 0.03;
				
				//y
				if(j == 0)
					box.children[count].position.y -= 0.03;
				if(j == 2)
					box.children[count].position.y += 0.03;
				count++;
			}
}

function miss(bubble){
	
	let loader = new THREE.TextureLoader();
	loader.crossOrigin = '';
	//miss
	let miss = loader.load('miss.png');
	let missmap = new THREE.MeshBasicMaterial({
		map:miss,
		side:THREE.DoubleSide,
		transparent:true
	});
	
	missPoint = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.7), missmap);
	missPoint.rotation.x = -Math.PI/2;
	missPoint.position.copy(bubble.position);
	
	markerRootHiro.add(missPoint);
	setTimeout("d(missPoint)", 500);
	
	return;
} 	
function d(m){
	markerRootHiro.remove(m);
}