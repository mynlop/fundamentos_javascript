const nombre = 'Mynor'
const dias = [
	'lunes',
	'martes',
	'miercoles',
	'jueves',
	'viernes',
	'sabado',
	'domingo'
]

function correr(){
	const min = 5
	const max = 15
	return Math.round(Math.random() * (max - min)) + min
}

let totalKms = 0
const length = dias.length
for(let i = 0; i < length; i++){
	const kms = correr()
	totalKms += kms
	console.log(`El dias ${dias[i]}, ${nombre} corrió ${kms}kms`)
}
const promedioKms = totalKms / length
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)} kilometros.`)

//math.floor = redondea hacia abajo
//math.round = redondea hacia abajo o arriba