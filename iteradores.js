function fibonacci(){
    let a = 0, b = 1
    return{
        next: function(reset){
            if(reset) a = 0, b= 1
            let f = a
            a = b
            b = f + a
            return { value: f, done: false}
        }
    }
}

// const fibo = new fibonacci()
// fibo.next().value
// fibo.next().value
// fibo.next().value

const fibol = {nombre : 'Sacha'}
fibol[Symbol.iterator] = fibonacci


let i = 0
for(let value of fibol){
    console.log(value)
    i++
    if(i > 20) break
}
// los iteradores nos permiten hacer listas infinitas de de elementos
// para los iteradores podemos obtener lo siguiente
// next() = itera los datos
// value = nos devolvera el valor del dato
// done = sera un indicador para cuando la lista se haya terminado