function get(URL){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function(){
            const DONE = 4
            const OK = 200
            if(this.readyState === DONE){
                if(this.status === OK){
                    resolve(JSON.parse(this.responseText))
                } else{
                    reject(new Error(`Se produjo un error al realizar el request: ${this.status}`))
                }
            }
        }
        xhr.open('GET', URL)
        xhr.open(null)
    })
}

function _handleError(err){
    console.log(`Request failed: ${err}`)
}

let luke

get("https://www.swapi.co/api/people/1/")
    .then((response)=> {
        luke = response
        return get(luke.homeworld)
    })
    .then((homeworld) => {
        luke.homeworld = homeworld
        console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
    })
    .catch(err => _handleError(err))







// Las Promesas son objetos y estan asociadas con alguna tarea asincronica
// Existen tres estados internos de las Promesas
//      1. Pending
//      2. Fullfiled
//      3. Rejected

// const promise = new Promise(function(resolve, reject){
//     setTimeout(resolve , 1000)
//     reject(new Error('Se produjo un error'))
// })

// promise
//     .then(function(){

//     })
//     .catch(function(err){
        
//     })
