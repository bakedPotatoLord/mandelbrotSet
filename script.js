let c = document.getElementById('c0')
var ctx = c.getContext('2d')
ctx.save()

let render = document.getElementById('render')



function setHW(){
	repetitions = document.getElementById('quality').value
	cw = document.getElementById('w').value
	ch = document.getElementById('h').value
	c.width = cw
	c.height = ch
	ctx.restore()
	ctx.translate(cw/2,ch/2)
	
}

function pow(a,b){
	return Math.pow(a,b)
}

function line(x1,y1,x2,y2){
	ctx.beginPath()
	ctx.moveTo(x1,y1)
	ctx.lineTo(x2,y2)
	ctx.stroke()
} 

function point(x,y){
	//line(x,y,x+0.5,y+0.5)
	ctx.fillRect(x,y,1,1)

}

function drawPixel(x, y, r, g, b, a){
    var index = (x + y * cw) * 4;

		

    data.data[index + 0] = r;
    data.data[index + 1] = g;
    data.data[index + 2] = b;
    data.data[index + 3] = a;
}



function axes(){
	ctx.strokeStyle = 'black'
	ctx.lineWidth =cw/400
	line(0,-cw/2,0,cw/2)
	line(-ch/2,0,ch/2,0)
};

function updateDisplay(r){

	color = hslToRgb(350-(15*r), 100, 50)
	//ctx.strokeStyle = 'hsl('+( 350-(15*r) )+',100%,50%)'
	ctx.fillStyle = 'hsl('+( 300* ( r / repetitions) )+',100%,50%)'

	for(var x=-cw/2;x<cw/2;x++){
		for(y=-ch/2;y<ch/2;y++){
			if(f(x/ (cw / 4) ,y/ (cw / 4) ,r)){
				point(x,y)
				//drawPixel (x, y, 255, 100, 100, 1)
			};
		};
	};

};

window.onload = function(){
	setHW()
	
}

function draw(){
	data = ctx.createImageData(cw, ch);
	setHW()
	
	for(var i =0;i<repetitions;i++){
		console.log('rendered',i)
		
		updateDisplay(i)
		
	}
	axes()
	//ctx.putImageData(data,0,0)
}

