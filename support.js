const quadrille = function(dx, dy, couleur){
	//Lignes verticales
	for(let x = 0; x <= canvas.width; ){
		c.beginPath()
		c.moveTo(x, 0)
		c.lineTo(x, canvas.height)
		c.strokeStyle = couleur
		c.stroke()
		x = x + dx
	}

	//Lignes horizontales
	for(let y = 0; y <= canvas.height; ){
		c.beginPath()
		c.moveTo(0, y)
		c.lineTo(canvas.width, y)
		c.strokeStyle = couleur
		c.stroke()
		y = y + dy
	}
}

const verifierIntersection = function(sourisX,sourisY) {
	for(let i=0; i < points.length; i++){
		let point = points[i]
		//Distance entre souris et point
		let d = Math.sqrt( Math.pow(sourisX - point.x,2) + Math.pow(sourisY - point.y, 2) )
		if (d <= point.r) {
			return point // Il y a intersection!
		}
	}
	return null // Pas d'intersection
}

const afficherCoords = function(){

	let str = ""
	str = str + points[0].nom +  " (" + points[0].x.toString() + ", " + points[0].y + ") ;"
	str = str + points[1].nom +  " (" + points[1].x.toString() + ", " + points[1].y + ") ;"
	str = str + points[2].nom +  " (" + points[2].x.toString() + ", " + points[2].y + ") ;"
	str = str + points[3].nom +  " (" + points[3].x.toString() + ", " + points[3].y + ") "
	str = str + "<br>"

	str = str + "c.moveTo(" + points[0].x.toString() + ", " + points[0].y + "); "
	str = str + "c.bezierCurveTo(" + points[1].x.toString() + ", " + points[1].y + ", "
	str = str + points[2].x.toString() + ", " + points[2].y + ", "
	str = str +  points[3].x.toString() + ", " + points[3].y + ") "

	document.getElementById("coords").innerHTML = str
}
