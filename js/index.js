// EVENT LISTENERS

const btnAgregarListener = document.getElementById('btnMostrarForm').addEventListener('click', mostrarForm)
const agregarItemListener = document.getElementById('agregarItem').addEventListener('click', agregarItemList)
const btnAgregar = document.getElementById('btnMostrarForm')
const nuevaCompra = document.getElementById('nuevaCompra')
const sinCompras = document.getElementById('sinCompras')

let contadorId = 0

function mostrarForm() {
    nuevaCompra.classList.remove('off')
    btnAgregar.classList.add('off')
}

function agregarItemList(e) {
    e.preventDefault()
    let Id = contadorId
    let titulo = document.getElementById('titulo').value
    let icono = document.getElementById('icono').value
    let descripcion = document.getElementById('descripcion').value
    // validacion de titulo e icono
    if(titulo === '' || icono === ''){
        alert('Debe ingresar un titulo de producto')
        return
    } else {

    }
}
