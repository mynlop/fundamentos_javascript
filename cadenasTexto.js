function platzom(str){
	let translation = str
	
	// si la palabra termina en ar, se le quitan esos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		//slice = cortar caracteres
		translation = str.slice(0,-2)
	}
	// si inicia con z, se le añade "pe" al final
	if(str.toLowerCase().startsWith('z')){
		translation += 'pe'
	}
	//si la palabra traducida tiene 10 o mas letras, 
	//se debe partir a la mitad y unir con un guion
	const length = translation.length
	if(length >= 10){
		const firsHalf = translation.slice(0, Math.round(length) / 2)
		const secondHalf = translation.slice(Math.round(length) / 2)
		translation = `${firsHalf}-${secondHalf}`
	}
	// si la palabra es un palindromo, ningua regla cuenta, 
	//se devuelve la misma palabra intercalando minusculas y mayusculas

	const reverse = (str) => str.split('').reverse().join('')

	function minMay(str){
		const length = str.length
		let translation = ''
		let capitalize = true

		for(let i = 0; i < length; i++){
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return translation
	}

	if(str == reverse(str)){
		return minMay(str)
	}

	return translation
}

console.log(platzom('Programar'))
console.log(platzom('Zorro'))
console.log(platzom('Zarpar'))
console.log(platzom('abecedario'))
console.log(platzom('sometemos'))
