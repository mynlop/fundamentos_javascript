// Date(año, mes-1, dia)
const nacimiento = new Date(1994, 1, 18)

const hoy = new Date()

const tiempo = hoy - nacimiento
//resultado en milisegundos

const tiempoSegundos = tiempo / 100

const tiempoMin = tiempoSegundos / 60

const tiempoHoras = tiempoMin / 60

const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())

const dias = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miércoles',
	'Juevez',
	'Viernes',
	'Sábado'
]

dias[proximoCumple.getDay()]