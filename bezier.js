"use strict"

const animer = function() {

	requestAnimationFrame(animer)
	//Effacer le canvas
	c.clearRect(0,0,canvas.width, canvas.height)
	quadrille(10, 10, "rgba(256, 256, 256, 0.2)")

	for (let i=0; i<points.length; i++){
		let point = points[i]
		point.dessiner()
	}

	//Courbe bezier
	c.beginPath()
	c.moveTo(points[0].x, points[0].y)
	c.bezierCurveTo(	points[1].x, points[1].y,
										points[2].x, points[2].y,
										points[3].x, points[3].y,)
	c.strokeStyle = "Black"
	c.stroke()

	//Ligne entre points 1 et 2
	c.beginPath()
	c.moveTo(points[0].x, points[0].y)
	c.lineTo(points[1].x, points[1].y)
	c.strokeStyle = "Gray"
	c.stroke()

	//Ligne entre points 2 et 4
	c.beginPath()
	c.moveTo(points[3].x, points[3].y)
	c.lineTo(points[2].x, points[2].y)
	c.strokeStyle = "Gray"
	c.stroke()
}

//---Partie principale

console.log("Studio")

//---Variables globales

//Définir l'espace de dessin
var canvas = document.getElementById("canvas1")

//Définir les dimensions de l'espace de dessin
canvas.width = window.innerWidth*0.5
canvas.height = window.innerHeight*0.8
// Obtenir un contexte de deux dimensions pour dessiner
var c = canvas.getContext("2d")
//Définir la police de base
c.font = "30px Arial";

//Définir un Array vide pour contenir les points
var points = []
//Ajouter des points dans le Array points
points.push( new Point(200, 400, 10, "P1") )
points.push( new Point(250, 300, 10, "P2") )
points.push( new Point(350, 220, 10, "P3") )
points.push( new Point(400, 400, 10, "P4") )

afficherCoords()

var pointChoisi = null // Au départ, aucun point n'est choisi
var dragging = false	// Au départ, il n'y a pas de dragging

// Définir les événements à surveiller
window.addEventListener("mousemove", function()	{
	// Si le programme est en mode dragging,
	// déplacer le point choisi aux coordonnées de la souris et afficher les coordonnées.
	if (dragging) {
		pointChoisi.deplacer(event.offsetX, event.offsetY)
		afficherCoords()
	}
})

window.addEventListener("mousedown", function()	{
	// Quand l'utilisateur appui sur un bouton de souris
	// vérifier si les coordonnées de la souris sont à l'intérieures
	// du cercle d'un des points définis.
	pointChoisi = verifierIntersection(event.offsetX, event.offsetY)
	if (pointChoisi != null) {
		pointChoisi.surbrillance() // Changer la couleur du point
		dragging = true // Activer le mode dragging
	}
})

window.addEventListener("mouseup", function()	{
	// Quand l'utilisateur relâche le bouton de souris
	// dessiner le point avec la couleur normale et
	// désactiver le mode dragging
	if (pointChoisi != null) {
		pointChoisi.normal()
		dragging = false
	}
}
)

animer()
