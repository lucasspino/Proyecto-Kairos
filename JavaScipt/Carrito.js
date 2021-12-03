const Clickbutton = document.querySelectorAll('.btnId')
const panelContenedorCarrito = document.querySelector('.panel-carrito-contenedor')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', agregarItemCarrito)
})



function agregarItemCarrito(e){
  const button = e.target
  const item = button.closest('.col-md-4')
  const itemTitle = item.querySelector('.divMacetas__subtitle').textContent;
  const itemPrice = item.querySelector('.div--Precio').textContent;
  const itemImg = item.querySelector('.img-thumbnail').src;
  
  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  agregarCarrito(newItem)
}


function agregarCarrito(newItem){

  const alert = document.querySelector('.alert')

  setTimeout( function(){
    alert.classList.add('alert-primary')
  }, 2000)
    alert.classList.remove('alert-primary')

  const InputElemnto = panelContenedorCarrito.getElementsByClassName('cantidadElement')
  for(let i =0; i < carrito.length ; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      CarritoTotal()

      return null;
    }
  }
  
  carrito.push(newItem)
  
  renderCarrito()
} 


function renderCarrito(){
  panelContenedorCarrito.innerHTML = ''
  carrito.map(item => {
    const contenedorPanel = document.createElement('div')
    contenedorPanel.classList.add('ItemCarrito')
    const Content = `
    
    <article class="col-md-4 productoItem">
            <img src="${item.img}" class="img-thumbnail img-carrito" alt="${item.title}">
        <aside class= "aside-carrito">
            <h2 class="divMacetas__subtitle">${item.title}</h2>
            <span class="precio-Producto">${item.precio}</span>
        </aside>
        <div class="div-productos-el">        
            <p class="p-carrito">Cantidad</p>
            <input class="cantidadElement" min="1" type="number" value=${item.cantidad}>
            <button class="botonBorrar" type="button">X</button>
        </div>
    </article>  
    `
    contenedorPanel.innerHTML = Content;
    panelContenedorCarrito.append(contenedorPanel)

    contenedorPanel.querySelector(".botonBorrar").addEventListener('click', removeItemCarrito)
    contenedorPanel.querySelector(".cantidadElement").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()
}

function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.Precio-Total')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
}

function removeItemCarrito(e){
  const buttonDelete = e.target
  const itemCarrito = buttonDelete.closest(".ItemCarrito")
  const title = itemCarrito.querySelector('.divMacetas__subtitle').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)
    }
  }
  itemCarrito.remove()
  CarritoTotal()
}

function sumaCantidad(e){
  const sumaInput  = e.target
  const itemTitle = sumaInput.closest(".ItemCarrito")
  const title = itemTitle.querySelector('.divMacetas__subtitle').textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}

function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}

