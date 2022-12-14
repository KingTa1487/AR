class TempoBubble{
	constructor(){
		this.bubble = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), new THREE.MeshPhongMaterial({transparent : true, opacity : 1}));
		this.whichcolor = Math.random();
		this.bubble.material.color.setHSL(this.whichcolor, 1, 0.5);
		this.sc = 0;
		this.boom = false;
		P(this.bubble);
	}
}

function P(bubble){
	let X = Math.floor(Math.random()*10000);
	
	if(X%2 == 1){
		bubble.position.set(-Math.random()*3.5, 0, Math.random()*3 + 3);
	}
	else
		bubble.position.set(Math.random()*3.5 , 0, Math.random()*3 + 3);
	
}

