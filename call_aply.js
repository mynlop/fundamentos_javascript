const mynor = {
    nombre : 'Mynor',
    apellido : 'Lopez'
}

function saludar(veces, uppercase){
    let str = `Hola ${this.nombre} ${this.apellido}.`
    str = uppercase ? str.toUpperCase() : str
    for(let i = 0; i < veces; i++){
        console.log(str)
    }
}

//call(el valor de this, parametros de funcion)
//call y apply hacen lo mismo

//saludar.apply(mynor,[3,true])
//saludar.call(mynor, 3, true)

const params = [3, true]
saludar.call(mynor, ...params)