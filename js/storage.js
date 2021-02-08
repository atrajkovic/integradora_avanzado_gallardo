// var item = document.querySelector("#listaPedidos");

// function guardar() {
//     sessionStorage.setItem('pedido', item.innerHTML)
//     alert('datos guardados');
// }

// function mostrar(){
//     if(sessionStorage.getItem('pedidos')){ 
//         item.innerHTML = sessionStorage.getItem('pedido');
//     }
// }

// function borrar(){
//     sessionStorage.clear()
//     location.reload()
//     alert('Los pedidos han sido borrados')
// }

function iniciar(){
    var boton = document.querySelector('#grabar')
    boton.addEventListener('click', nuevoPedido)
    mostrarPedidos()
    
    var borrador = document.querySelector('#borrador')
    borrador.addEventListener('click', borrarTodo)
}

function nuevoPedido(){
    var nombrePedido = document.querySelector('#pedido').value
    var horarioComida = document.querySelector('#horarioComida').value
    var descripComida = document.querySelector('#descripComida').value
    var fecha = document.querySelector('#fecha').value

    var valores = [horarioComida, descripComida, fecha]

    localStorage.setItem(nombrePedido, valores)
    mostrarPedidos()
}

function mostrarPedidos(){
    var caja = document.getElementById('grabados')
    caja.innerHTML = ""
    var cabeza = document.querySelector('#pedidoCargado')

    if(localStorage.length === 0){
        caja.innerHTML = "<div class='sinPedidos'>No posee pedidos guardados</div>"
        cabeza.innerHTML = ''
    }else{
    cabeza.innerHTML = '<div class="headTable nombreTabla">Nombre</div><div class="headTable horarioTabla">Horario</div><div class="headTable descripTabla">Descripción</div><div class="headTable fechaTabla">Fecha</div>'

    for(var i=0; i<localStorage.length; i++){
        var id = localStorage.key(i)
        var valor = localStorage.getItem(id)
        valor = valor.split(',')
        //caja.innerHTML += '<p>'+ id + '-' + valor + '</p>'
        caja.innerHTML += '<div class="nombreTabla">'+ id + '</div><div class="horarioTabla">' + valor[0] + '</div><div class="descripTabla">'+valor[1]+'</div><div class="fechaTabla">'+valor[2]+'</div>'
    }}
}

function borrarTodo() {
    localStorage.clear()
    location.reload()
    mostrarPedidos()
}

window.addEventListener('load', iniciar())