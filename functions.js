function xF(x,y){
return x**2 - y**2 
}

function yF(x,y){
return 2*x*y 
}


function f(x,y,reps){
	return ( mf(x,y,reps) <= 4)
}

//mf stands for multi-function
function mf(x,y,repts){
	var tx=x
	var ty=y
	var ty0
	var tx0
	var finalX=0
	var finalY=0

	for(var i=0;i<repts;i++){
		tx0 = xF(tx,ty) + x
		ty0 = yF(tx,ty) + y
		tx = tx0
		ty = ty0

	}
	
	if(repts == 0){
		return ( x )**2 + ( y  )**2
	}else{
		return ( tx )**2 + ( ty  )**2
	}

}


function hslToRgb(h, s, l){
	var r, g, b;

	if(s == 0){
		r = g = b = l; // achromatic
	}else{
		var hue2rgb = function hue2rgb(p, q, t){
			if(t < 0) t += 1;
			if(t > 1) t -= 1;
			if(t < 1/6) return p + (q - p) * 6 * t;
			if(t < 1/2) return q;
			if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
			return p;
		}

		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1/3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1/3);
	}

	return [Math.round(r * 255)%256, Math.round(g * 255)%256, Math.round(b * 255)%256];
}
