class Toggable{
    constructor(el){
        //inicializar el estado interno
        this.el = el
        this.el.innerHTML = 'Off'
        this.activated = false
        this.onClick = this.onClick.bind(this)
        this.el.addEventListener('click', this.onClick)
    }

    onClick(ev){
        console.log(this)
        // cambiar estado interno
        this.activated = !this.activated
        this.toogleText()
    }

    toogleText(){
        //cambiar texto
        this.el.innerHTML = this.activated ? 'On' : 'Off'
    }
}
const button = document.getElementById('boton')
const miBoton = new Toggable(button)


// ----------------------------------------------
function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}.`)
}
saludar("Mynor", "Lopez")
//fija una parametro a un metodo
const saludarMynors = saludar.bind(null, "Mynor")

saludarMynors("Santiago")
