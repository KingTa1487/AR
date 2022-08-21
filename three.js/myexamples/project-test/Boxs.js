class Boxs{
	constructor(bubble){
		this.b1 = box();	this.b2 = box();	this.b3 = box();
		this.b4 = box();	this.b5 = box();	this.b6 = box();
		this.b7 = box();	this.b8 = box();	this.b9 = box();
		
		this.b10 = box();	this.b11 = box();	this.b12 = box();
		this.b13 = box();	this.b14 = box();	this.b15 = box();
		this.b16 = box();	this.b17 = box();	this.b18 = box();
		
		this.b19 = box();	this.b20 = box();	this.b21 = box();
		this.b22 = box();	this.b23 = box();	this.b24 = box();
		this.b25 = box();	this.b26 = box();	this.b27 = box();
		
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

function box(){
	let box = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshPhongMaterial({transparent : true, opacity : 0.7}));
	//box.material.emissive = new THREE.Color(0xFFF000);
	box.material.emissive.setHSL(1/6, 1, 0.5);
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