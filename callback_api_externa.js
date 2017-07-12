function get(URL, callback){
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function (){
        const DONE = 4
        const OK = 200
        if(this.readyState === DONE){
            if(this.status === OK){
                // todo ok
                callback(null, JSON.parse(this.responseText))
            } else {
                // hubo error
                callback(new Error(`Se producjo un error al realizar el request: ${this.status}`))
            }
        }
    }

    xhr.open('GET', URL)
    xhr.send(null)
}

function _handleError(err){
    console.log(`Request failed: ${err}`)
}

get('https://swapi.co/api/people/1', function onResponse(err, luke){
    if(err) return _handleError(err)
    
    // console.log(`Request succeded`)
    // console.log(`luke`, luke)

    get(luke.homeworld, function onHomeWorldResponse(err, homeworld){
        if(err) return _handleError(err)
        
        luke.homeworld =  homeworld
        console.log(`${luke.name} nació en ${luke.homeworld.name}`)
    })
})