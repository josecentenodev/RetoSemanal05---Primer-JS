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
    let itemId = `item${contadorId}`
    let listId = `listItem${contadorId}`
    let iconoId = `icono${contadorId}`
    let tituloId = `texto${contadorId}`
    let descripcionId = `descripcion${contadorId}`
    e.preventDefault()
    let titulo = document.getElementById('titulo').value
    let icono = document.getElementById('icono').value
    let descripcion = document.getElementById('descripcion').value
    let listaCompras = document.getElementById('listaCompras')
    let modelo = `<li class="listaCompraItem" id="${listId}"><i class="${icono}" id="${iconoId}"></i><p id="${tituloId}" class="listItemText">${titulo}</p><i class="fas fa-sort-down" id="${itemId}"></i></i><p class="off" id="${descripcionId}">${descripcion}</p></li>`
    listaCompras.innerHTML += modelo
    nuevaCompra.classList.add('off')
    sinCompras.classList.add('off')
    listaCompras.classList.remove('off')
    btnAgregar.classList.remove('off')
    contadorId++
    agregarDescripcionListener(listId)
}

function agregarDescripcionListener(listId) {
    let descripcionItem = document.getElementById(listId)
    descripcionItem.addEventListener('click', verDescripcion)
}

function verDescripcion(e){
console.log(e)
}