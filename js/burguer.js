function dibujarBurguer(){
    var espacio = document.getElementById('canvas-burguer')
    var forma = espacio.getContext('2d')

    forma.fillStyle = "#0330ad"
    forma.fillRect(40,25, espacio.width -80 , 15)
    forma.fillRect(40,67, espacio.width -80 , 15)
    forma.fillRect(40,110, espacio.width -80 , 15)
}

function openMenu() {
    if (actMenu==false){
        header.style.height = '550px'
        actMenu = true
    } else{
        header.style.height = '140px'
        actMenu = false

    }

}


dibujarBurguer()
var header = document.querySelector('header')
var actMenu = false
