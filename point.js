class Point {
	constructor(x, y, r, nom) {
		this.x = x
		this.y = y
		this.r = r
		this.nom = nom
		this.color = "rgba(0,0,255,0.2)" //Default
	}

	dessiner() {
		c.beginPath()
		c.arc(this.x, this.y, this.r, 0, Math.PI*2, false )
		c.fillStyle = this.color
		c.fill()
		c.fillText(this.nom, this.x, this.y - 20)
	}

	deplacer(x,y){
		this.x = x
		this.y = y
	}

	surbrillance(){
		this.color =  "rgba(255,255,0,0.5)" //Jaune avec opacité 0.5
	}

	normal(){
		this.color =  "rgba(0,0,255,0.2)" // Bleu avec opacité 0.2
	}
}
