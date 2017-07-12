setTimeout(function callback(){
    console.log('A')
}, 1000)

for(let i = 0; i < 99999999; i++)

console.log('B')

//B
//undefined
//A

// Javascript cuando ejecuta código lo hace de manera sincrona, pero una forma que tiene de 
// ejecutar codigo asincroon es con las funciones llamadas 'callbacks'
// Estas se ejecutan y nos devuelven el proceso, generalmente despues de algun  evento de tiempo,
// al completarse un request o al termina de leer un archivo

