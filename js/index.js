// EVENT LISTENERS

const btnAgregarListener = document.getElementById('btnMostrarForm').addEventListener('click', mostrarForm)
const agregarItemListener = document.getElementById('agregarItem').addEventListener('click', agregarItemList)
const btnAgregar = document.getElementById('btnMostrarForm')
const nuevaCompra = document.getElementById('nuevaCompra')
const sinCompras = document.getElementById('sinCompras')
const listaCompras = document.getElementById('listaCompras')

let contadorId = 0

function mostrarForm() {
    nuevaCompra.classList.remove('off')
    btnAgregar.classList.add('off')
}

function agregarItemList(e) {
    e.preventDefault()
    let id = contadorId
    let titulo = document.getElementById('titulo').value
    let icono = document.getElementById('icono').value
    let descripcion = document.getElementById('descripcion').value
    // validacion de titulo e icono
    if(titulo === '' || icono === ''){
        alert('Debe ingresar titulo y categoría de producto')
        return
    } else {
        let newTitular = `<li class="listaCompraItem"><i class="${icono}"></i><p>${titulo}</p><i id="${id}" class="fas fa-chevron-down" onclick="showGladis(this.id)"></i><div class="descripciones off" id="div${id}"><i class="${icono}"></i><h3>${titulo}</h3><p>${descripcion}</p><i onclick="closeGladys(this.id)" id="close${id}" class="fas fa-times close"</i></div></li>`
        listaCompras.innerHTML += newTitular
        nuevaCompra.classList.add('off')
        listaCompras.classList.remove('off')
        console.log(listaCompras)
        btnAgregar.classList.remove('off')
        document.getElementById('titulo').value = ''
        document.getElementById('icono').value = ''
        document.getElementById('descripcion').value = ''
    }
    contadorId++
}

function showGladis(id) {
    let itemToShow = document.getElementById('div'+id)
    itemToShow.classList.remove('off')
}

function closeGladys(id) {
    let actualButton = document.getElementById(id);
    actualButton.parentElement.classList.add('off')
}