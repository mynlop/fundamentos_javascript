const starWars7 = 'Star Wars: El Despertar de la Fuerza'
const pgStarWars7 = 13

const nameMynor = 'Mynor'
let ageMynor = 23

const nameSanti = 'Santi'
let ageSanti = 12

// function canWatchStarWars7(name, age, isWithAdult = false){
// 	if(age >= pgStarWars7){
// 		alert(`${name} puede pasar a ver ${starWars7}`)
// 	}else if(isWithAdult){
// 		alert(`${name} puede pasar a ver ${starWars7},
// 			Aunque su edad es ${age}, se encuentra acompañado por un adulto`)
// 	}else{
// 		alert(`${name} no puede pasar a ver ${starWars7},
// 			Tiene ${age} años y necesita tener minimo ${pgStarWars7}`)
// 	}
// }

let canWatchStarWars7 = (name, age, isWithAdult = false)=>{
	if(age >= pgStarWars7){
		alert(`${name} puede pasar a ver ${starWars7}`)
	}else if(isWithAdult){
		alert(`${name} puede pasar a ver ${starWars7},
			Aunque su edad es ${age}, se encuentra acompañado por un adulto`)
	}else{
		alert(`${name} no puede pasar a ver ${starWars7},
			Tiene ${age} años y necesita tener minimo ${pgStarWars7}`)
	}
}

//si el valor de un parametro es undefined = false

canWatchStarWars7(nameMynor,ageMynor)
canWatchStarWars7(nameSanti, ageSanti, true)